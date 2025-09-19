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
<table role="presentation" cellpadding="0" cellspacing="0" border="0" link="#333333" vlink="#333333" alink="#333333" style="font-family:Arial,Helvetica,sans-serif; font-size:12px; color:#333; line-height:1.4; max-width:650px; min-width:480px; width:100%; border:0; border-collapse:collapse;">
  
  <!-- Üst Ayraç (divider) -->
  <tr>
    <td>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="height:1px; line-height:1px; font-size:0; background:#e6e6e6;">&nbsp;</td>
        </tr>
      </table>
    </td>
  </tr>

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
                  <strong style="color:#333;">GSM: </strong>
                  <a href="tel:{{PHONE_TEL}}" style="color:#333!important; text-decoration:none!important; text-underline:none!important; border:0!important; border-bottom:0!important;">{{PHONE_DISPLAY_SAFE}}</a>
                </td>
                <td width="50%" align="right" style="padding:0; color:#333; white-space:nowrap; text-align:right; text-decoration:none!important; mso-table-lspace:0pt; mso-table-rspace:0pt;">
                  <strong style="color:#333;">Website: </strong>
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
                  <strong style="color:#333;">Email: </strong>
                  <a href="mailto:{{EMAIL}}" style="color:#333!important; text-decoration:none!important; text-underline:none!important; border:0!important; border-bottom:0!important;">{{EMAIL_SAFE}}</a>
                </td>
                <td style="padding:0; width:100%;"></td>
                <td align="right" style="padding:0; white-space:nowrap; text-align:right; width:1%;" valign="middle">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="right" style="margin-left:auto; margin-right:0; mso-table-lspace:0pt; mso-table-rspace:0pt; table-layout:fixed;">
                    <tr>
                      <!-- Web sitesi -->
                      <td style="padding-right:10px; white-space:nowrap;" valign="middle">
                        <a href="https://matrikstr.com/" target="_blank" style="color:#333!important; text-decoration:none!important; border:0!important; border-bottom:0!important;">
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
        <img src="https://matrikstr.com/email_imza.png" alt="Matriks Building Control Systems" width="650" style="display:block; width:100%; max-width:650px; height:auto; border:0; outline:none; text-decoration:none;">
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

    // Split strategy to avoid forced underlines: aggressive (per-char) for Outlook,
    // word for webmail (Gmail), or none.
    const splitStrategy = state.splitStrategy || 'aggressive';
    const microSplitWord = (txt) => String(txt || '')
      .split(/(\s+)/)
      .map(tok => /\s+/.test(tok) ? tok : `<span style="text-decoration:none;">${escapeHtml(tok)}</span>`)
      .join('');
    let emailSafe, websiteSafe;
    const websiteRaw = 'matrikstr.com';
    if (splitStrategy === 'none') {
      emailSafe = escapeHtml(emailRaw);
      websiteSafe = escapeHtml(websiteRaw);
    } else if (splitStrategy === 'word') {
      emailSafe = microSplitWord(emailRaw);
      websiteSafe = microSplitWord(websiteRaw);
    } else {
      const microSplitAgg = (txt) => Array.from(String(txt || ''))
        .map(ch => `<span style="text-decoration:none;">${escapeHtml(ch)}</span>`)
        .join('');
      emailSafe = microSplitAgg(emailRaw);
      websiteSafe = microSplitAgg(websiteRaw);
    }
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

  // Optimize image by downscaling and compressing before embedding as data URI
  async function optimizeBlobToDataURL(blob, targetWidthMax = 600, targetHeightMax = 240) {
    try {
      // SVG or very small images: embed as-is
      if (blob.type && /svg\+xml/.test(blob.type)) {
        return await new Promise((resolve, reject) => {
          const r = new FileReader();
          r.onerror = reject;
          r.onload = () => resolve(r.result);
          r.readAsDataURL(blob);
        });
      }

      const createBitmap = typeof createImageBitmap === 'function'
        ? createImageBitmap
        : async (b) => await new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = URL.createObjectURL(b);
          });

      const bmp = await createBitmap(blob);
      const ow = bmp.width || 0;
      const oh = bmp.height || 0;
      let nw = ow;
      let nh = oh;
      if (ow > targetWidthMax || oh > targetHeightMax) {
        const r = Math.min(targetWidthMax / Math.max(ow, 1), targetHeightMax / Math.max(oh, 1));
        nw = Math.max(1, Math.round(ow * r));
        nh = Math.max(1, Math.round(oh * r));
      }

      // Keep tiny icons crisp in PNG if small; otherwise use JPEG for better compression
      const usePng = (blob.type === 'image/png' && Math.max(nw, nh) <= 256);
      const mime = usePng ? 'image/png' : 'image/jpeg';
      const quality = usePng ? undefined : 0.85;

      const canvas = document.createElement('canvas');
      canvas.width = nw || 1;
      canvas.height = nh || 1;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(bmp, 0, 0, nw, nh);
      }
      const dataUrl = canvas.toDataURL(mime, quality);
      try { if (bmp.close) bmp.close(); } catch(_) {}
      return dataUrl;
    } catch (_) {
      // Fallback: embed original blob as data URL
      return await new Promise((resolve, reject) => {
        const r = new FileReader();
        r.onerror = reject;
        r.onload = () => resolve(r.result);
        r.readAsDataURL(blob);
      });
    }
  }

  async function inlineImages(html){
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const images = Array.from(doc.querySelectorAll('img[src]'));
      await Promise.all(images.map(async (img) => {
        try {
          const res = await fetch(img.src, { cache: 'no-store' });
          if (!res.ok) return;
          const blob = await res.blob();
          const optimized = await optimizeBlobToDataURL(blob);
          img.src = String(optimized);
        } catch(_) { /* ignore individual image errors */ }
      }));
      return '<!doctype html>\n' + doc.documentElement.outerHTML;
    } catch (e) {
      return html; // fallback to original
    }
  }

  async function buildHtmlWithMode(values, mode){
    let html = buildHtml(values);
    // In browser/Live Server, avoid fetching remote images (CORS). Force external mode.
    try {
      const inElectron = !!(window.api && typeof window.api.openSignatures === 'function');
      if (!inElectron && mode === 'inline') {
        mode = 'external';
      }
    } catch(_) {}
    if (mode === 'inline') {
      html = await inlineImages(html);
    }
    return html;
  }

  // Clean HTML for webmail paste: remove comments/styles, collapse whitespace, keep inline styles
  function makeCleanForWebmail(html) {
    try {
      const withoutComments = String(html || '').replace(/<!--([\s\S]*?)-->/g, '');
      const withoutStyle = withoutComments.replace(/<style[\s\S]*?<\/style>/gi, '');
      // Keep inline styles; just normalize spaces between tags
      return withoutStyle
        .replace(/>\s+</g, '><')
        .replace(/\s+\n/g, '\n');
    } catch(_) {
      return html;
    }
  }

  // Extract a robust HTML fragment for clipboard (prefer first table)
  function extractClipboardFragment(html) {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(String(html || ''), 'text/html');
      const tbl = doc.querySelector('table');
      if (tbl) return tbl.outerHTML;
      return doc.body ? doc.body.innerHTML : String(html || '');
    } catch(_) {
      return String(html || '');
    }
  }

  async function updatePreview(){
    const values = {
      fullName: $('fullName').value,
      title: $('title').value,
      phone: $('phone').value,
      email: $('email').value
    };
    const modeEl = $('imageMode');
    const mode = modeEl ? modeEl.value : 'inline';
    // Choose a split strategy: webmail (external) -> none; inline -> aggressive (for Outlook)
    state.splitStrategy = (mode === 'external') ? 'none' : 'aggressive';
    let html = await buildHtmlWithMode(values, mode);
    // Preview-only centering: inject a small CSS override so the signature's main table is centered in the iframe
    try {
      // Mark body for preview and center the first/top-level table
      if (!/class=\"preview-center\"/i.test(html)) {
        html = html.replace(/<body(.*?)>/i, '<body$1 class="preview-center">');
      }
      html = html.replace(/<\/head>/i, '<style>\n  /* Preview-only styles: center signature in iframe */\n  body.preview-center table { margin-left:auto !important; margin-right:auto !important; }\n</style></head>');
    } catch(_) {}
    const iframe = $('preview');
    iframe.srcdoc = html;
    return html;
  }

  $('previewBtn').addEventListener('click', () => { updatePreview(); });

  const copyGmailBtn = $('copyGmailBtn');
  if (copyGmailBtn) {
    copyGmailBtn.addEventListener('click', async () => {
      if (!isElectron && !(navigator.clipboard && (navigator.clipboard.write || navigator.clipboard.writeText))) {
        setFooterStatus('Kopyalama tarayıcıda engellendi.', 'status-error');
        return;
      }
      $('status').textContent = 'Panoya kopyalanıyor...';
      setFooterStatus('Panoya kopyalanıyor...', 'status-pending');
      const values = {
        fullName: $('fullName').value,
        title: $('title').value,
        phone: $('phone').value,
        email: $('email').value
      };
      // Force Gmail-friendly version: no micro splitting and external images
      state.splitStrategy = 'none';
      const html = await buildHtmlWithMode(values, 'external');
      const clean = makeCleanForWebmail(html);
      const fragment = extractClipboardFragment(clean);
      let ok = false, errMsg = '';
      try {
        const res = await window.api.writeClipboardHtml(fragment);
        ok = !!(res && res.ok);
        if (!ok && res && res.error) errMsg = res.error;
      } catch(e) { errMsg = e?.message || String(e); }
      // Fallback to navigator.clipboard
      if (!ok && navigator.clipboard && navigator.clipboard.write) {
        try {
          const item = new ClipboardItem({ 'text/html': new Blob([fragment], { type: 'text/html' }) });
          await navigator.clipboard.write([item]);
          ok = true;
        } catch (e) {}
      }
      if (!ok && navigator.clipboard && navigator.clipboard.writeText) {
        try { await navigator.clipboard.writeText(fragment); ok = true; } catch (e) {}
      }
      showToast(ok ? 'Panoya kopyalandı. Gmail’e yapıştırabilirsiniz.' : (errMsg || 'Kopyalama başarısız.'));
      $('status').textContent = ok ? 'Panoya kopyalandı.' : (errMsg || 'Kopylama başarısız.');
      setFooterStatus(ok ? 'Panoya kopyalandı.' : 'Kopyalama başarısız.', ok ? 'status-success' : 'status-error');
    });
  }

  // Temiz Kopya butonu handler'ı (eksikse ekle)
  const copyCleanBtn = $('copyCleanBtn');
  if (copyCleanBtn) {
    copyCleanBtn.addEventListener('click', async () => {
      if (!isElectron && !(navigator.clipboard && (navigator.clipboard.write || navigator.clipboard.writeText))) {
        setFooterStatus('Kopyalama tarayıcıda engellendi.', 'status-error');
        return;
      }
      $('status').textContent = 'Temiz içerik hazırlanıyor...';
      setFooterStatus('Temiz kopya hazırlanıyor...', 'status-pending');
      const values = {
        fullName: $('fullName').value,
        title: $('title').value,
        phone: $('phone').value,
        email: $('email').value
      };
      const mode = ($('imageMode')?.value) || 'inline';
      state.splitStrategy = (mode === 'external') ? 'none' : 'aggressive';
      const html = await buildHtmlWithMode(values, mode);
      const clean = makeCleanForWebmail(html);
      const fragment = extractClipboardFragment(clean);
      let ok = false, errMsg = '';
      try {
        const res = await window.api.writeClipboardHtml(fragment);
        ok = !!(res && res.ok);
        if (!ok && res && res.error) errMsg = res.error;
      } catch(e) { errMsg = e?.message || String(e); }
      if (!ok && navigator.clipboard && navigator.clipboard.write) {
        try {
          const item = new ClipboardItem({ 'text/html': new Blob([fragment], { type: 'text/html' }) });
          await navigator.clipboard.write([item]);
          ok = true;
        } catch (e) {}
      }
      if (!ok && navigator.clipboard && navigator.clipboard.writeText) {
        try { await navigator.clipboard.writeText(fragment); ok = true; } catch (e) {}
      }
      showToast(ok ? 'Temiz kopya panoya alındı.' : (errMsg || 'Kopyalama başarısız.'));
      $('status').textContent = ok ? 'Temiz kopya panoda.' : (errMsg || 'Kopyalama başarısız.');
      setFooterStatus(ok ? 'Temiz kopya panoda.' : 'Kopyalama başarısız.', ok ? 'status-success' : 'status-error');
    });
  }

  const saveBtnEl = $('saveBtn');
  if (saveBtnEl) saveBtnEl.addEventListener('click', async () => {
    console.log('[UI] saveBtn clicked');
    setFooterStatus(`Outlook'a kaydediyor...`, 'status-pending');
    const fileName = $('signatureName').value || 'Email Imzasi';
    const html = await updatePreview();
    $('status').textContent = 'Kaydediliyor...';
    setGlobalStatus('info', 'Outlook imza klasörüne kaydediliyor...');
    let res = { ok:false, error:'API not available' };
    try {
      if (window.api && typeof window.api.saveSignature === 'function') {
        res = await window.api.saveSignature({ fileName, htmlContent: html });
      } else if (!isElectron) {
        setFooterStatus(`Outlook'a kaydet özelliği sadece masaüstü uygulamasında çalışır.`, 'status-error');
        return;
      }
    } catch (e) {
      res = { ok:false, error: e?.message || String(e) };
    }
    if(res.ok){
      $('status').textContent = `İmza kaydedildi: ${res.path}`;
      setFooterStatus(`Outlook'a kaydedildi.`, 'status-success');
      setGlobalStatus('success', `İmza kaydedildi: ${res.path}`);
    } else {
      $('status').textContent = `Hata: ${res.error}`;
      setFooterStatus('Kaydetme başarısız.', 'status-error');
      setGlobalStatus('error', `Kaydetme başarısız: ${res.error}`);
    }
  });

  // Save As button: save to a user-picked location
  const saveAsBtn = $('saveAsBtn');
  if (saveAsBtn) {
    saveAsBtn.addEventListener('click', async () => {
      console.log('[UI] saveAsBtn clicked');
      setFooterStatus('Dosyaya kaydediyor...', 'status-pending');
      const fileName = $('signatureName').value || 'Email Imzasi';
      const html = await updatePreview();
      $('status').textContent = 'Dosyaya kaydediliyor...';
      setGlobalStatus('info', 'Dosyaya kaydediliyor...');
      try {
        let res;
        if (window.api && typeof window.api.saveAsSignature === 'function') {
          res = await window.api.saveAsSignature({ fileName, htmlContent: html });
        } else if (!isElectron) {
          setFooterStatus('Dosyaya kaydet özelliği sadece masaüstü uygulamasında çalışır.', 'status-error');
          return;
        } else {
          throw new Error('saveAsSignature API not available');
        }
        if (res?.ok) {
          $('status').textContent = `Kaydedildi: ${res.path}`;
          setFooterStatus('Dosyaya kaydedildi.', 'status-success');
          setGlobalStatus('success', `Dosyaya kaydedildi: ${res.path}`);
        } else {
          $('status').textContent = res?.error || 'Kaydetme iptal edildi veya başarısız oldu.';
          setFooterStatus('Kaydetme iptal edildi veya başarısız oldu.', 'status-error');
          setGlobalStatus('error', res?.error || 'Kaydetme iptal edildi veya başarısız oldu.');
        }
      } catch (e) {
        $('status').textContent = e?.message || 'Kaydetme başarısız oldu.';
        setFooterStatus('Kaydetme başarısız oldu.', 'status-error');
        setGlobalStatus('error', e?.message || 'Kaydetme başarısız oldu.');
      }
    });
  }

  // Initial preview
  updatePreview();

  // Check for updates button
  $('checkUpdateBtn').addEventListener('click', async () => {
    $('status').textContent = 'Güncellemeler kontrol ediliyor...';
    try {
      await window.api.checkForUpdates();
    } catch (error) {
      $('status').textContent = `Güncelleme kontrolü başarısız: ${error.message}`;
    }
  });

  // Open signatures folder
  const openSignaturesBtn = $('openSignaturesBtn');
  if (openSignaturesBtn) {
    openSignaturesBtn.addEventListener('click', async () => {
      console.log('[UI] openSignaturesBtn clicked');
      $('status').textContent = 'İmzalar klasörü açılıyor...';
      setGlobalStatus('info', 'İmzalar klasörü açılıyor...');
      setFooterStatus('İmzalar klasörü açılıyor...', 'status-pending');
      try {
        let res;
        if (window.api && typeof window.api.openSignatures === 'function') {
          res = await window.api.openSignatures();
        } else if (!isElectron) {
          setFooterStatus('İmzalar klasörü sadece masaüstü uygulamasında açılabilir.', 'status-error');
          return;
        } else {
          throw new Error('openSignatures API not available');
        }
        if (!res?.ok) {
          $('status').textContent = res?.error || 'Klasör açılamadı.';
          setFooterStatus('Klasör açılamadı.', 'status-error');
          setGlobalStatus('error', res?.error || 'Klasör açılamadı.');
        } else {
          $('status').textContent = `Açıldı: ${res.path}`;
          setFooterStatus('İmzalar klasörü açıldı.', 'status-success');
          setGlobalStatus('success', `İmzalar klasörü açıldı: ${res.path}`);
        }
      } catch (e) {
        $('status').textContent = e?.message || 'Klasör açılamadı.';
        setFooterStatus('Klasör açılamadı.');
        setGlobalStatus('error', e?.message || 'Klasör açılamadı.');
      }
    });
  }

  // Update progress from main
  if (window.api?.onUpdateProgress) {
    window.api.onUpdateProgress(({ percent }) => {
      const p = typeof percent === 'number' ? percent : 0;
      $('status').textContent = `Güncelleme indiriliyor: %${p}`;
    });
  }

  // Up-to-date status from main
  if (window.api?.onUpdateStatus) {
    window.api.onUpdateStatus((data) => {
      if (data?.type === 'uptodate') {
        $('status').textContent = 'Uygulamanız güncel.';
      }
    });
  }

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

  // Small DOM helper (ensure available before any event bindings)
  // Avoid duplicate declaration errors if `$` already exists
  if (typeof window.$ !== 'function') {
    window.$ = function(id) { return document.getElementById(id); };
  }

  // Environment detection: Electron vs plain browser (Live Server)
  const isElectron = !!(window.api && typeof window.api.openSignatures === 'function');
  if (!isElectron) {
    // Do NOT disable buttons; just guard handlers and inform via footer
    const btns = ['saveBtn','saveAsBtn','openSignaturesBtn'];
    btns.forEach(id => { const el = $(id); if (el) { el.title = 'Bu özellik masaüstü uygulamasında çalışır'; }});
    if (typeof setFooterStatus === 'function') {
      setFooterStatus('Tarayıcı önizleme modundasınız. Masaüstü uygulamasında deneyin.', 'status-error');
    }
  }

  // Toast helper
  function showToast(msg) {
    try {
      const t = document.getElementById('toast');
      if (!t) return;
      t.textContent = String(msg || '');
      t.classList.add('show');
      clearTimeout(showToast._tid);
      showToast._tid = setTimeout(() => t.classList.remove('show'), 2000);
    } catch(_) {}
  }
  // Footer status helper (sticky footer, left side)
  function setFooterStatus(message, state) {
    try {
      const fs = document.getElementById('footerStatus');
      if (!fs) return;
      const text = message ? String(message) : 'Boşta..';
      const dot = document.createElement('span');
      dot.className = 'status-dot ' + (state || 'status-idle');
      fs.innerHTML = '';
      fs.appendChild(dot);
      fs.appendChild(document.createTextNode(`Durum: ${text}`));
    } catch(_) {}
  }
  // Backward-compatible banner status helper (may be hidden by CSS)
  function setGlobalStatus(type, message) {
    try {
      const el = document.getElementById('globalStatus');
      if (!el) return;
      // Normalize classes: alert + variant
      el.className = `alert alert-${type || 'info'} show`;
      el.textContent = String(message || '');
    } catch(_) {}
  }
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
  // Initial footer status
  setFooterStatus(undefined, 'status-idle');

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
        .then(html => {
          try {
            var logoUrl = (window.assets && typeof window.assets.logo === 'function')
              ? window.assets.logo()
              : 'build/matriks-logo.png';
            // Fix specific logo path
            html = html.replace(/src=(['"])build\/matriks-logo\.png\1/g, 'src="' + logoUrl + '"');
            // Fix any other build/* images to absolute file URLs if helper available
            if (window.assets && typeof window.assets.url === 'function') {
              html = html.replace(/src=(['"])build\/(.+?)\1/g, function(_, q, p) {
                return 'src="' + window.assets.url('build/' + p) + '"';
              });
            }
          } catch (_) { /* ignore */ }
          aboutContent.innerHTML = html;
        })
        .catch(() => {
          aboutContent.textContent = 'İçerik yüklenemedi.';
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
  // Plan B: Ensure F12 toggles DevTools via IPC from renderer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'F12') {
      try { window.api?.toggleDevTools?.(); } catch(_) {}
      e.preventDefault();
    }
  });
})();
