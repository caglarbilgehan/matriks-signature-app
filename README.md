# Email İmzası Oluşturucu (Electron)

Cross-platform (Windows/macOS/Linux) masaüstü uygulaması. Kullanıcıdan ad-soyad, ünvan, telefon, email ve "Email İmza Adı" (dosya adı) bilgilerini alır; Outlook uyumlu HTML imzası üretir.

- Windows: Varsayılan olarak `%APPDATA%\Microsoft\Signatures` klasörüne `.htm` olarak kaydeder.
- macOS/Linux: Uygulama sizden bir klasör seçmenizi ister ve oraya kaydeder.

> Not: iOS desteklenmez (mobil işletim sistemi). macOS desteklenir.

## Gereksinimler
- Node.js 18+ (önerilen)

## Kurulum ve Çalıştırma
```bash
# bağımlılıkları yükleyin
npm install

# uygulamayı başlatın
npm start
```

Komutları `signature-app/` klasöründe çalıştırın.

## Paketleme (opsiyonel)
```bash
npm run pack
```
Üretilen çıktılar platforma göre `SignatureApp-<platform>-x64/` klasöründe oluşur.

## Kullanım
1. "Email İmza Adı" alanına dosya adını yazın. (Örn: SirketImzam)
2. Ad Soyad, Ünvan, Telefon ve Email alanlarını doldurun.
3. "Önizle" ile kontrol edin.
4. "Email İmzası Oluştur" butonuna tıklayın.
   - Windows: `%APPDATA%\Microsoft\Signatures\SirketImzam.htm` olarak kaydeder.
   - Diğerleri: klasör seçmenizi ister ve oraya `.htm` kaydeder.

## Şablon
İmza HTML şablonu, mevcut `email-imza.htm` esas alınarak parametrik hale getirilmiştir ve `renderer.js` içinde yer alır. Alanlar:
- `{{FULL_NAME}}`
- `{{TITLE}}`
- `{{PHONE_DISPLAY}}` ve `{{PHONE_TEL}}` (tel: linki için temizlenmiş sürüm)
- `{{EMAIL}}`

## Dosya Yapısı
- `main.js`: Electron ana süreç, pencere oluşturma, kaydetme (IPC) ve platform klasör seçimi.
- `preload.js`: Renderer ile ana süreç arasında güvenli köprü (`window.api.saveSignature`).
- `index.html`: Form ve önizleme arayüzü.
- `renderer.js`: Form verilerini toplayıp HTML üretir, önizleme ve kaydetme çağrıları.
- `package.json`: Electron scriptleri ve bağımlılıklar.

## Güvenlik Notları
- `contextIsolation` açıktır, `nodeIntegration` kapalıdır. Renderer tarafı sadece `preload.js` ile açığa çıkarılan API'yi kullanır.

## Özelleştirme
- Şirket linkleri, ikonlar ve renkler `renderer.js` içindeki şablonda güncellenebilir.
- Farklı platformlarda Outlook imza klasörleri değişebilir; macOS'ta Outlook sürümüne göre klasör yolunu otomatikleştirmek istenirse `main.js` içinde tespit mantığı eklenebilir.
