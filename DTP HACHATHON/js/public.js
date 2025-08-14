





function toggleDropdown() {
      document.getElementById("dropdownMenu").classList.toggle("show");
}
    // Close the dropdown if user clicks outside of it
      window.onclick = function(event) {
      if (!event.target.matches('.dropdown-toggle') && !event.target.closest('.dropdown-toggle')) {
            var dropdowns = document.getElementsByClassName("dropdown-menu");
            for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.remove("show");
      }
      }
}


















const apiBase = '/tracksys-prototype/api/api.php?action=';

async function lookupCode(code){
  const res = await fetch(apiBase + 'shipment&code=' + encodeURIComponent(code));
  if(!res.ok) throw new Error('Network');
  return await res.json();
}

function renderStatusBadge(status){
  const span = document.createElement('span');
  span.className = 'badge-status badge-' + status.replace(/\s+/g,'_');
  span.innerText = status;
  return span;
}

document.getElementById('checkBtn').onclick = async ()=>{
  try{
    const code = document.getElementById('codeInput').value.trim();
    if(!code) return alert('Enter code');
    const data = await lookupCode(code);
    if(!data) return alert('Tracking code not found');
    document.getElementById('result').style.display='block';
    const statusCard = document.getElementById('statusCard'); statusCard.innerHTML='';
    statusCard.appendChild(renderStatusBadge(data.status));
    const meta = document.createElement('div');
    meta.style.marginTop='8px';
    meta.innerText = data.origin + ' → ' + data.destination + ' — created at ' + data.created_at;
    statusCard.appendChild(meta);

    const ul = document.getElementById('cpList'); ul.innerHTML='';
    (data.checkpoints || []).forEach(c=>{
      const li=document.createElement('li'); li.className='list-group-item';
      const left=document.createElement('div'); left.innerHTML = `<strong>${c.checkpoint_name}</strong><br><small>${c.scanned_at}</small>`;
      const right=document.createElement('div'); right.innerText = c.note || '';
      li.appendChild(left); li.appendChild(right); ul.appendChild(li);
    });

    // feedback submit
    document.getElementById('fbForm').onsubmit = async (e)=>{
      e.preventDefault();
      const payload = {
        shipment_id: data.id,
        user_phone: document.getElementById('phone').value,
        message: document.getElementById('message').value,
        anonymous: document.getElementById('anon').checked
      };
      const r = await fetch(apiBase + 'feedback', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(payload)
      });
      if(r.ok){
        alert('Feedback sent — thank you');
        document.getElementById('message').value='';
      } else {
        alert('Error sending feedback');
      }
    };
  } catch(err){
    console.error(err);
    alert('Error: '+err.message);
  }
};

// quick helper so you can test from browser console:
// simulateScan('TRK-20250810-0001')
window.simulateScan = function(code){ document.getElementById('codeInput').value = code; document.getElementById('checkBtn').click(); };
