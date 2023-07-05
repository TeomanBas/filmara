# Film Arama Uygulaması
[Film Arama Uygulaması](https://filmara.rf.gd) imdb üzerinden film araması yapan basit bir web uygulamasıdır.

## Açıklama
- **api_request_url:** Asıl api uygulaması ile tarayıcı arasındaki web servisinin istekleri kabul ettiği adrestir.
- **api dizini:**Aradaki api katmanını oluşturan uygulamayı oluşturan dosyalardır.
- **api/config/ dizini:** api ile  iletişim kurması için gerekli olan api key ve domain bilgilerinin, hassas verileirn tutulduğu dizindir.Bu veriler config php dosyasının içerisinde sabit olarak tanımlanmıştır.htaccess ile dizin şifrelenmiş ve htpasswd dosyası ara api sunucuda host edilen dizin dışında tutulmaktadır. 
- **api_url_parameters:** api url'ine gönderilecek olan parametreleri içerir.
