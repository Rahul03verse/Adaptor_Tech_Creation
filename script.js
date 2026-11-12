document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const id=a.getAttribute('href');if(id!=='#'){e.preventDefault();document.querySelector(id)?.scrollIntoView({behavior:'smooth'})}}));

document.addEventListener('DOMContentLoaded',()=>{
  const cards=[...document.querySelectorAll('.catalogue-products .product-card')];
  const categoryCards=[...document.querySelectorAll('.shop-category-card')];
  const catalogue=document.querySelector('#catalogue');
  const title=document.querySelector('#selected-category-title');
  const desc=document.querySelector('#selected-category-desc');
  const back=document.querySelector('#back-to-categories');
  const descriptions={
    'CCTV Power Supplies':'Browse CCTV power supplies and multi-camera power solutions.',
    'Networking Cables':'Browse CAT6 patch cords and networking cables.',
    'SMPS & DC Adaptors':'Browse SMPS adaptors and DC power solutions.',
    'HDMI Cables':'Browse HDMI cables for your display and connectivity needs.',
    'Networking & PoE':'Browse LAN switches and PoE networking products.',
    'Power Extensions & Chargers':'Browse extension boards, chargers and power accessories.',
    'Catalogue':'Browse the remaining catalogue products.'
  };
  function showCategory(category, scroll=true){
    cards.forEach(c=>c.style.display=c.dataset.category===category?'flex':'none');
    categoryCards.forEach(c=>c.classList.toggle('active-category',c.dataset.category===category));
    if(title) title.textContent=category;
    if(desc) desc.textContent=descriptions[category]||'Explore products in this category.';
    if(back) back.style.display='inline-flex';
    if(scroll) catalogue?.scrollIntoView({behavior:'smooth',block:'start'});
  }
  categoryCards.forEach(c=>{
    const go=()=>showCategory(c.dataset.category);
    c.addEventListener('click',go);
    c.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();go();}});
  });
  back?.addEventListener('click',()=>document.querySelector('#categories')?.scrollIntoView({behavior:'smooth',block:'start'}));
  // Keep the product area empty until a category is chosen.
  cards.forEach(c=>c.style.display='none');
  if(back) back.style.display='none';
});
