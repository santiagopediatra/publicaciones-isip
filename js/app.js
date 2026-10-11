'use strict';
const $ = id => document.getElementById(id);
const normalize = text => String(text || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const escapeHTML = text => String(text || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const controls = ['searchInput','yearFilter','areaFilter','journalFilter','sortOrder'];
const modal = $('modal');
let lastTrigger;
function populate(id, values) {
 values.forEach(value => {const option = document.createElement('option'); option.value = value; option.textContent = value; $(id).append(option);});
}
populate('yearFilter', [...new Set(catalog.map(a=>a.year).filter(Boolean))].sort((a,b)=>b-a));
const unknown = document.createElement('option'); unknown.value='unknown'; unknown.textContent='Sin año verificado'; $('yearFilter').append(unknown);
// Case and accent variants share one filter without changing bibliographic records.
const areaOptions = new Map();
catalog.forEach(a=>{if(!areaOptions.has(normalize(a.area)))areaOptions.set(normalize(a.area),a.area);});
populate('areaFilter', [...areaOptions.values()].sort((a,b)=>a.localeCompare(b,'es')));
populate('journalFilter', [...new Set(catalog.map(a=>a.journal))].sort((a,b)=>a.localeCompare(b,'es')));
function filteredArticles() {
 const q=normalize($('searchInput').value.trim()), year=$('yearFilter').value, area=$('areaFilter').value, journal=$('journalFilter').value;
 return catalog.filter(a=>(!year || (year==='unknown' ? !a.year : String(a.year)===year)) && (!area || normalize(a.area)===normalize(area)) && (!journal || a.journal===journal) && normalize([a.title,a.authors,a.journal,a.area,a.enfoque,a.importancia,...(a.authorAliases||[]),...(a.keywords||[])].join(' ')).includes(q)).sort((a,b)=>{
 if($('sortOrder').value==='title')return a.title.localeCompare(b.title,'es');
 if(!a.year && b.year)return 1;if(a.year && !b.year)return -1;
 return ($('sortOrder').value==='oldest' ? 1 : -1)*((a.year||0)-(b.year||0));
 });
}
function card(a, recent=false) {
 return `<article class="card" data-id="${escapeHTML(a.id)}">${recent?'':`<div class="thumb"><img src="${escapeHTML(a.img)}" alt="" width="640" height="400" loading="lazy" decoding="async"><span>Imagen ilustrativa</span></div>`}<div class="content"><div class="card-meta"><span class="badge">${escapeHTML(a.area)}</span><span class="year">${a.year||'Año no verificado'}</span></div><h3 class="title"><button class="title-button" data-details="${escapeHTML(a.id)}">${escapeHTML(a.title)}</button></h3><p class="journal">${escapeHTML(a.journal)}</p>${recent?'':`<p class="authors">${escapeHTML(a.authors)}</p>${a.doiIdentifier?`<a class="doi-link" href="https://doi.org/${escapeHTML(a.doiIdentifier)}" target="_blank" rel="noopener noreferrer">DOI: ${escapeHTML(a.doiIdentifier)}</a>`:''}`}<div class="actions"><a class="article-link" href="${escapeHTML(a.source)}" target="_blank" rel="noopener noreferrer">Artículo original ↗</a>${a.pdf?`<a class="pdf-link" href="${escapeHTML(a.pdf)}" target="_blank" rel="noopener noreferrer">PDF ↗</a>`:''}</div></div></article>`;
}
function render() {
 const items=filteredArticles(); $('grid').innerHTML=items.map(a=>card(a)).join(''); $('empty').hidden=!!items.length;
 $('resultText').textContent=`${items.length} de ${catalog.length} publicaciones`;
}
function reset(){controls.forEach(id=>$(id).value=id==='sortOrder'?'newest':'');render();}
function openModal(id, trigger) {
 const a=catalog.find(a=>a.id===id);if(!a)return;lastTrigger=trigger||document.activeElement;
 for(const [id,value] of Object.entries({modalCategory:a.area,dialogTitle:a.title,modalAuthors:a.authors,modalJournal:a.journal,modalBibliography:[a.year, a.volume&&`Vol. ${a.volume}`,a.issue&&`N.º ${a.issue}`,a.pages&&`pp. ${a.pages}`,a.articleNumber&&`Artículo ${a.articleNumber}`].filter(Boolean).join(' · '),modalEnfoque:a.enfoque,modalImportancia:a.importancia,metadataNote:a.metadataNote}))$(id).textContent=value||'';
 $('metadataNote').hidden=!a.metadataNote;
 $('modalDoiRow').hidden=!a.doiIdentifier; $('modalDoi').textContent=a.doiIdentifier||''; $('modalDoi').href=a.doiIdentifier?`https://doi.org/${a.doiIdentifier}`:a.source;
 $('modalSource').href=a.source; $('modalPdf').hidden=!a.pdf;if(a.pdf)$('modalPdf').href=a.pdf;
 modal.showModal();document.body.style.overflow='hidden';$('closeModal').focus();
}
function closeModal(){modal.close();}
modal.addEventListener('close',()=>{document.body.style.overflow='';lastTrigger?.focus();});
modal.addEventListener('click',event=>{if(event.target===modal){const r=modal.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)closeModal();}});
// Keep keyboard navigation within the open details dialog at both boundaries.
modal.addEventListener('keydown',event=>{
 if(event.key!=='Tab')return;
 const focusable=[...modal.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter(el=>el.getClientRects().length);
 const first=focusable[0],last=focusable[focusable.length-1];
 if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus();}
 else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus();}
});
$('closeModal').addEventListener('click',closeModal);
document.addEventListener('click',event=>{const trigger=event.target.closest('[data-details]');if(trigger)openModal(trigger.dataset.details,trigger);});
controls.forEach(id=>$(id).addEventListener(id==='searchInput'?'input':'change',render));
$('searchForm').addEventListener('submit',e=>e.preventDefault());$('resetFilters').addEventListener('click',reset);$('emptyReset').addEventListener('click',()=>{reset();$('searchInput').focus();});
$('totalCount').textContent=catalog.length;
$('recentGrid').innerHTML=['pdc-violencia-gestacional','pdc-anemia-indigena','pdc-experiencia-tutores'].map(id=>catalog.find(a=>a.id===id)).map(a=>card(a,true)).join('');
render();
