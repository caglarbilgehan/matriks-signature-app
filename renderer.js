(function(){
  const $ = (id) => document.getElementById(id);

  const state = {
    template: `<!doctype html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Email İmzası</title>
</head>
<body>
<!-- Outlook (Word) için koşullu stil: linkleri mavi/altı çizgili yapma -->
<!--[if mso]>
<style type="text/css">
  a, a:link, a:visited, a span, span.MsoHyperlink, span.MsoHyperlinkFollowed {
    color:#333333 !important;
    text-decoration:none !important;
    text-underline:none !important;
  }
</style>
<![endif]-->
<!-- ===== MATRİKS | Kurumsal E-posta İmzası ===== -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" link="#333333" vlink="#333333" alink="#333333" style="font-family:Arial,Helvetica,sans-serif; font-size:12px; color:#333; line-height:1.4; max-width:524px; width:100%; border:0; border-collapse:collapse;">
  
  <!-- Çalışan Bilgileri -->
  <tr>
    <td style="padding:10px 0 3px 0;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td style="font-size:16px; font-weight:bold; color:#111;">{{FULL_NAME}}</td>
        </tr>
        <tr>
          <td style="font-size:14px; color:#666; padding-bottom:6px;">{{TITLE}}</td>
        </tr>
        <tr>
          <td style="padding-top:6px; padding-bottom:6px; color:#333; border-top:1px solid #e6e6e6;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td width="50%" style="padding:0; color:#333; white-space:nowrap; text-decoration:none!important;">
                  <strong style="color:#333;">İş Cep: </strong>
                  <a href="tel:{{PHONE_TEL}}" style="color:#333!important; text-decoration:none!important; text-underline:none!important; border:0!important; border-bottom:0!important;">{{PHONE_DISPLAY_SAFE}}</a>
                </td>
                <td width="50%" align="right" style="padding:0; color:#333; white-space:nowrap; text-align:right; text-decoration:none!important; mso-table-lspace:0pt; mso-table-rspace:0pt;">
                  <strong style="color:#333;">Web sitesi: </strong>
                  <a href="https://www.matrikstr.com" target="_blank" style="color:#333!important; text-decoration:none!important; text-underline:none!important; border:0!important; border-bottom:0!important;">{{WEBSITE_SAFE}}</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding-top:6px; padding-bottom:6px; border-top:1px solid #e6e6e6;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width:100%; table-layout:fixed;">
              <tr>
                <td style="padding:0; color:#333; white-space:nowrap; text-decoration:none!important;" valign="middle">
                  <strong style="color:#333;">E-posta: </strong>
                  <a href="mailto:{{EMAIL}}" style="color:#333!important; text-decoration:none!important; text-underline:none!important; border:0!important; border-bottom:0!important;">{{EMAIL_SAFE}}</a>
                </td>
                <td style="padding:0; width:100%;"></td>
                <td align="right" style="padding:0; white-space:nowrap; text-align:right; width:1%;" valign="middle">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="right" style="margin-left:auto; margin-right:0; mso-table-lspace:0pt; mso-table-rspace:0pt; table-layout:fixed;">
                    <tr>
                      <!-- Web sitesi -->
                      <td style="padding-right:10px; white-space:nowrap;" valign="middle">
                        <a href="https://www.google.com/maps?ll=40.984782,29.134192&z=10&t=m&hl=tr-TR&gl=US&mapclient=embed&cid=18104416979114888248" target="_blank" style="color:#333!important; text-decoration:none!important; border:0!important; border-bottom:0!important;">
                          <img src="https://matrikstr.com/email-signature/icons/website.png" alt="Web sitesi" width="24"  style="display:block; border:0;">
                        </a>
                      </td>
                      <!-- Location -->
                      <td style="padding-right:10px; white-space:nowrap;" valign="middle">
                        <a href="https://www.google.com/maps?ll=40.984782,29.134192&z=10&t=m&hl=tr-TR&gl=US&mapclient=embed&cid=18104416979114888248" target="_blank" style="color:#333!important; text-decoration:none!important; border:0!important; border-bottom:0!important;">
                          <img src="https://matrikstr.com/email-signature/icons/location.png" alt="Konum" width="24"  style="display:block; border:0;">
                        </a>
                      </td>
                      <!-- Phone -->
                      <td style="padding-right:10px; white-space:nowrap;" valign="middle">
                        <a href="tel:+902165749191" target="_blank" style="color:#333!important; text-decoration:none!important; border:0!important; border-bottom:0!important;">
                          <img src="https://matrikstr.com/email-signature/icons/phone.png" alt="Telefon" width="24"  style="display:block; border:0;">
                        </a>
                      </td>
                      <!-- LinkedIn -->
                      <td style="padding-right:10px; white-space:nowrap;" valign="middle">
                        <a href="https://www.linkedin.com/company/matriks-building-control-systems/" target="_blank" style="color:#333!important; text-decoration:none!important; border:0!important; border-bottom:0!important;">
                          <img src="https://matrikstr.com/email-signature/icons/linkedin.png" alt="LinkedIn hesabı" width="24"  style="display:block; border:0;">
                        </a>
                      </td>
                      <!-- Facebook -->
                      <td style="padding-right:10px; white-space:nowrap;" valign="middle">
                        <a href="https://www.facebook.com/MatriksBinaKontrol/" target="_blank" style="color:#333!important; text-decoration:none!important; border:0!important; border-bottom:0!important;">
                          <img src="https://matrikstr.com/email-signature/icons/facebook.png" alt="Facebook sayfası" width="24"  style="display:block; border:0;">
                        </a>
                      </td>
                      <!-- Twitter / X -->
                      <td style="padding-right:10px; white-space:nowrap;" valign="middle">
                        <a href="https://x.com/matriksbks" target="_blank" style="color:#333!important; text-decoration:none!important; border:0!important; border-bottom:0!important;">
                          <img src="https://matrikstr.com/email-signature/icons/twitter-x.png" alt="X (Twitter) hesabı" width="24"  style="display:block; border:0;">
                        </a>
                      </td>
                      <!-- Instagram -->
                      <td style="padding-right:10px; white-space:nowrap;" valign="middle">
                        <a href="https://www.instagram.com/matriks.bina.kontrol.sistemler/" target="_blank" style="color:#333!important; text-decoration:none!important; border:0!important; border-bottom:0!important;">
                          <img src="https://matrikstr.com/email-signature/icons/instagram.png" alt="Instagram hesabı" width="24"  style="display:block; border:0;">
                        </a>
                      </td>
                      <!-- YouTube -->
                      <td style="padding-right:0; white-space:nowrap;" valign="middle">
                        <a href="https://www.youtube.com/channel/UC1cwUfML-nEudxS1O6HX_Vg" target="_blank" style="color:#333!important; text-decoration:none!important; border:0!important; border-bottom:0!important;">
                          <img src="https://matrikstr.com/email-signature/icons/youtube.png" alt="YouTube kanalı" width="24"  style="display:block; border:0;">
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- Logo -->
  <tr>
    <td style="padding:0 0 12px 0;">
      <a href="https://www.matrikstr.com" target="_blank" style="border:0; outline:none; text-decoration:none;">
        <img src="https://matrikstr.com/email_imza.png" alt="Matriks Building Control Systems" style="display:block; width:auto; height:auto; border:0; outline:none; text-decoration:none;">
      </a>
    </td>
  </tr>

</table>
<!-- ===== /MATRİKS | Kurumsal E-posta İmzası ===== -->
</body>
</html>`
  };

  function sanitizePhoneForTel(phone){
    if(!phone) return '';
    // keep leading + and digits
    let cleaned = phone.replace(/[^+\d]/g,'');
    // ensure only one leading +
    cleaned = cleaned.replace(/^(?:\++?)/, '+');
    return cleaned;
  }

  function escapeHtml(str){
    return String(str || '')
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;')
      .replace(/'/g,'&#39;');
  }

  function buildHtml(values){
    const fullName = escapeHtml(values.fullName || 'Ad Soyad');
    const title = escapeHtml(values.title || 'Ünvan');
    const phoneDisplay = escapeHtml(values.phone || '');
    const phoneTel = sanitizePhoneForTel(values.phone || '');
    const emailRaw = String(values.email || '');
    const email = escapeHtml(emailRaw);

    // Create underline-resistant texts for links with aggressive micro-splitting
    // Wrap EACH character in a span with no text-decoration so Gmail/Outlook cannot draw a continuous underline.
    const microSplitAgg = (txt) => Array.from(String(txt || ''))
      .map(ch => `<span style="text-decoration:none;">${escapeHtml(ch)}</span>`)
      .join('');

    const emailSafe = microSplitAgg(emailRaw);
    const websiteRaw = 'matrikstr.com';
    const websiteSafe = microSplitAgg(websiteRaw);
    const phoneSafe = phoneDisplay; // keep as-is (spaces already formatted by user)

    let html = state.template
      .replaceAll('{{FULL_NAME}}', fullName)
      .replaceAll('{{TITLE}}', title)
      .replaceAll('{{PHONE_DISPLAY}}', phoneDisplay)
      .replaceAll('{{PHONE_TEL}}', phoneTel)
      .replaceAll('{{EMAIL}}', email)
      .replaceAll('{{EMAIL_SAFE}}', emailSafe || email)
      .replaceAll('{{WEBSITE_SAFE}}', websiteSafe)
      .replaceAll('{{PHONE_DISPLAY_SAFE}}', phoneSafe || phoneDisplay);

    return html;
  }

  function updatePreview(){
    const values = {
      fullName: $('fullName').value,
      title: $('title').value,
      phone: $('phone').value,
      email: $('email').value
    };
    const html = buildHtml(values);
    const iframe = $('preview');
    iframe.srcdoc = html;
    return html;
  }

  $('previewBtn').addEventListener('click', updatePreview);

  $('saveBtn').addEventListener('click', async () => {
    const fileName = $('signatureName').value || 'Email Imzasi';
    const html = updatePreview();
    $('status').textContent = 'Kaydediliyor...';
    const res = await window.api.saveSignature(fileName, html);
    if(res.ok){
      $('status').textContent = `İmza kaydedildi: ${res.path}`;
    } else {
      $('status').textContent = `Hata: ${res.error}`;
    }
  });

  // Initial preview
  updatePreview();

  // Populate version label in footer if available
  (async () => {
    try {
      const el = $('version');
      if (!el || !window.api?.getVersion) return;
      const res = await window.api.getVersion();
      if (res?.ok && res.version) {
        el.textContent = `Versiyon: ${res.version}`;
      }
    } catch (e) {
      // ignore version errors in UI
    }
  })();

  // Internet connectivity banner
  const netEl = $('netBanner');
  function updateNetBanner() {
    if (!netEl) return;
    if (navigator.onLine) {
      netEl.classList.remove('show');
    } else {
      netEl.classList.add('show');
    }
  }
  window.addEventListener('online', updateNetBanner);
  window.addEventListener('offline', updateNetBanner);
  // Initial check
  updateNetBanner();

  // About modal handlers
  const aboutBtn = document.getElementById('aboutBtn');
  const aboutModal = document.getElementById('aboutModal');
  const aboutClose = document.getElementById('aboutClose');
  const aboutClose2 = document.getElementById('aboutClose2');
  const aboutContent = document.getElementById('aboutContent');

  function openAbout() {
    if (!aboutModal) return;
    aboutModal.classList.add('show');
    // Load docs/index.html content
    if (aboutContent) {
      aboutContent.textContent = 'Yükleniyor...';
      fetch('docs/index.html')
        .then(r => r.ok ? r.text() : Promise.reject(new Error('İçerik yüklenemedi')))
        .then(html => { aboutContent.innerHTML = html; })
        .catch(() => {
          aboutContent.textContent = 'İçerik yüklenemedi. Lütfen daha sonra tekrar deneyin.';
        });
    }
  }

  function closeAbout() {
    if (!aboutModal) return;
    aboutModal.classList.remove('show');
  }

  if (aboutBtn) aboutBtn.addEventListener('click', (e) => { e.preventDefault(); openAbout(); });
  if (aboutClose) aboutClose.addEventListener('click', closeAbout);
  if (aboutClose2) aboutClose2.addEventListener('click', closeAbout);
  // Close when clicking outside the card
  if (aboutModal) aboutModal.addEventListener('click', (e) => {
    if (e.target === aboutModal) closeAbout();
  });
  // ESC closes modal
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAbout(); });
})();
