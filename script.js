// ==========================================
// CONFIGURATION
// ==========================================


// 2. College Logo (നിങ്ങൾ നൽകിയ യഥാർത്ഥ Base64 കോഡ്)
const COLLEGE_LOGO = "data:image/jpeg;base64,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";


// ==========================================
// SYSTEM LOGIC
// ==========================================

// --- Language Toggle ---
function toggleLanguage() {
  const html = document.documentElement;
  const next = html.getAttribute('data-lang') === 'en' ? 'ml' : 'en';
  html.setAttribute('data-lang', next);
  
  document.querySelectorAll('[data-en]').forEach(el => {
    el.innerHTML = el.getAttribute(`data-${next}`);
  });
}

// --- Image Processing ---
function processImage(file) {
  return new Promise((resolve, reject) => {
    if(!file) { resolve(""); return; }
    
    // File size validation (Max 2MB)
    if(file.size > 2 * 1024 * 1024) {
      alert("Image is too large! Please upload an image smaller than 2MB.");
      reject("File too large");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
    reader.readAsDataURL(file);
  });
}

// --- Registration Handler ---
async function handleSave(type) {
  const prefix = type === 'students' ? 's' : 'a';
  const name = document.getElementById(prefix + 'Name').value.trim();
  const phone = type === 'students' ? document.getElementById('sPhone').value.trim() : document.getElementById('aWhats').value.trim();
  
  if(!name || !phone) { 
    alert("Name and Phone Number are required! / പേരും ഫോൺ നമ്പറും നിർബന്ധമാണ്!"); 
    return; 
  }

  const btn = document.getElementById(prefix + 'Btn');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
  btn.disabled = true;

  try {
    const photoFile = document.getElementById(prefix + 'Photo').files[0];
    const photoBase64 = await processImage(photoFile);

    const entry = {
      id: Date.now(),
      type: type,
      name: name,
      phone: phone,
      extra1: type === 'students' ? document.getElementById('sAadhaar').value : document.getElementById('aBatch').value,
      extra2: type === 'alumni' ? document.getElementById('aJob').value : "",
      photo: photoBase64,
      date: new Date().toLocaleDateString('en-GB')
    };

    // Save to Local Storage
    const localData = JSON.parse(localStorage.getItem(type) || "[]");
    localData.push(entry);
    localStorage.setItem(type, JSON.stringify(localData));

    // Send to Google Sheets
    if(SCRIPT_URL !== "YOUR_APPS_SCRIPT_URL_HERE") {
      fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(entry)
      }).catch(e => console.log("Cloud save error:", e));
    }

    // WhatsApp Confirmation Message
    const msg = `നമസ്കാരം ${name}, നിങ്ങൾ നൂറുൽ ഹുദാ അറബിക് കോളേജ് പോർട്ടലിൽ വിജയകരമായി രജിസ്റ്റർ ചെയ്തിരിക്കുന്നു.\n\nവിഭാഗം: ${type.toUpperCase()}\nതീയതി: ${entry.date}\nID: NI-${entry.id.toString().slice(-5)}`;
    const waLink = `https://wa.me/91${phone}?text=${encodeURIComponent(msg)}`;

    alert("Registration Successful!");
    window.open(waLink, '_blank');
    
    // Reset form
    document.getElementById(prefix + 'Name').value = '';
    document.getElementById(prefix + 'Phone') ? document.getElementById(prefix + 'Phone').value = '' : null;
    document.getElementById('aWhats') ? document.getElementById('aWhats').value = '' : null;
    document.getElementById(prefix + 'Photo').value = '';
    document.getElementById('sAadhaar') ? document.getElementById('sAadhaar').value = '' : null;
    document.getElementById('aBatch') ? document.getElementById('aBatch').value = '' : null;
    document.getElementById('aJob') ? document.getElementById('aJob').value = '' : null;
    
    location.reload(); 
} catch (error) {
  console.error("Error:", error);
  btn.innerHTML = originalText;
  btn.disabled = false;
}
}

// --- Admin Functions ---
function showAdminPrompt() {
    if (prompt("Enter Admin Password:") === "noorul786") {
    document.getElementById('admin-panel').style.display = 'block';
    document.getElementById('admin-panel').scrollIntoView({ behavior: 'smooth' });
    displayRecords();
  } else {
    alert("Incorrect Password!");
  }
}

function displayRecords() {
  const search = document.getElementById('searchBox').value.toLowerCase();
  const area = document.getElementById('displayArea');
  area.innerHTML = "";
  
  ['students', 'alumni'].forEach(type => {
    const data = JSON.parse(localStorage.getItem(type) || "[]");
    data.filter(item => item.name.toLowerCase().includes(search)).forEach(item => {
      const div = document.createElement('div');
      div.className = "record-item";
      div.innerHTML = `
        <div style="display:flex; align-items:center;">
          <img src="${item.photo || 'https://via.placeholder.com/50'}" class="record-img">
          <div>
            <strong>${item.name}</strong> <span style="color:#888; font-size:0.8rem;">(NI-${item.id.toString().slice(-5)})</span><br>
            <small>${type.toUpperCase()} | ${item.phone}</small>
          </div>
        </div>
        <div class="action-group">
          <button class="btn-gold" onclick="generateID('${type}', ${item.id})"><i class="fas fa-id-badge"></i> ID Card</button>
          <button class="btn-delete" onclick="deleteEntry('${type}', ${item.id})"><i class="fas fa-trash"></i></button>
        </div>
      `;
      area.appendChild(div);
    });
  });
}

function deleteEntry(type, id) {
  if(confirm("Are you sure you want to delete this record?")) {
    let data = JSON.parse(localStorage.getItem(type) || "[]");
    data = data.filter(i => i.id !== id);
    localStorage.setItem(type, JSON.stringify(data));
    displayRecords();
  }
}

// --- PDF Generators ---
function downloadList(type) {
  if(!window.jspdf) { alert("PDF Library loading, please wait."); return; }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const data = JSON.parse(localStorage.getItem(type) || "[]");
  
  if(data.length === 0) { alert("No data found for " + type); return; }

  doc.setFontSize(14);
  doc.setTextColor(0, 77, 64);
  doc.text("NOORUL HUDA ARABIC COLLEGE", 14, 15);
  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.text(type.toUpperCase() + " REGISTRATION LIST", 14, 21);
  
  const rows = data.map((i, index) => [index + 1, i.name, i.phone, i.extra1, i.date]);
  
  doc.autoTable({
    head: [['#', 'Name', 'Phone/WhatsApp', type==='students'?'Aadhaar':'Batch', 'Date']],
    body: rows,
    startY: 28,
    theme: 'grid',
    headStyles: { fillColor: [0, 77, 64] }
  });
  
  doc.save(`Noorul_Huda_${type}_List.pdf`);
}

// --- ID Card Generator with QR & Logo ---
function generateID(type, id) {
  if(!window.jspdf) { alert("PDF Library loading, please wait."); return; }
  
  const data = JSON.parse(localStorage.getItem(type) || "[]");
 foundperson = data.find(i => i.id === id);
  if(!person) { alert("Data not found!"); return; }

  // Create temporary div for QR Code
  const qrDiv = document.createElement("div");
 qrText = `Name: ${person.name}\nType: ${type.toUpperCase()}\nID: NI-${person.id.toString().slice(-5)}\nPhone: ${person.phone}`;
  new QRCode(qrDiv, { text: qrText, width: 100, height: 100 });
  
  // Wait for QR code to render inside canvas
  setTimeout(() => {
    try {
      const qrCanvas = qrDiv.querySelector('canvas');
      const qrImage = qrCanvas.toDataURL("image/png");

      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({ orientation: 'l', unit: 'mm', format: [86, 54] }); // CR80 Size
      
      // 1. Header Background (Teal)
      doc.setFillColor(0, 77, 64);
      doc.rect(0, 0, 86, 16, 'F');
      
      // Gold Line
      doc.setFillColor(212, 175, 55);
      doc.rect(0, 16, 86, 1, 'F');

      // 2. Add College Logo (Left corner)
      if(COLLEGE_LOGO && COLLEGE_LOGO.startsWith("data:image")) {
        // Changed 'PNG' to 'JPEG' here since your logo is a JPEG
        try { doc.addImage(COLLEGE_LOGO, 'JPEG', 4, 2, 12, 12); } catch(e) { console.log("Logo error", e); }
      }

      // 3. Header Text
      doc.setTextColor(255, 255, 255);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.text("NOORUL HUDA ARABIC COLLEGE", 48, 8, { align: 'center' });
      doc.setFontSize(6);
      doc.setFont("helvetica", "normal");
      doc.text("OFFICIAL IDENTITY CARD", 48, 12, { align: 'center' });

      // 4. User Photo
      if(person.photo) {
        doc.setFillColor(212, 175, 55);
        doc.rect(5, 20, 22, 22, 'F'); // Gold Border
        try { doc.addImage(person.photo, 'JPEG', 6, 21, 20, 20); } catch(e) { console.log("Photo error", e); }
      } else {
        doc.setDrawColor(200);
        doc.rect(6, 21, 20, 20);
        doc.setFontSize(8);
        doc.setTextColor(150);
        doc.text("No Photo", 16, 32, { align: 'center' });
      }

      // 5. User Details
      doc.setTextColor(30, 30, 30);
      doc.setFontSize(10);
      doc.setFont("helvetica", "bold");
      doc.text(person.name.toUpperCase(), 30, 26);

      doc.setFontSize(7);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(80, 80, 80);
      doc.text("ID No : NI-" + person.id.toString().slice(-5), 30, 31);
      doc.text("Group : " + (type === 'students' ? "Student" : "Alumni"), 30, 35);
      doc.text("Phone : " + person.phone, 30, 39);
      doc.text((type === 'students' ? "Aadhaar: " : "Batch : ") + person.extra1, 30, 43);

      // 6. QR Code
      doc.addImage(qrImage, 'PNG', 65, 20, 17, 17);
      doc.setFontSize(5);
      doc.setTextColor(0);
      doc.text("SCAN FOR INFO", 73.5, 39, { align: 'center' });

      // 7. Footer
      doc.setFillColor(0, 77, 64);
      doc.rect(0, 50, 86, 4, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(5);
      doc.text("Valid Document of Noorul Huda Arabic College", 43, 52.5, { align: 'center' });

      doc.save(`${person.name}_ID_Card.pdf`);
    } catch (err) {
      console.error("PDF Generation Error: ", err);
      alert("Error generating ID Card. Check console for details.");
    }
  }, 150); // Wait 150ms for QR generation;
}