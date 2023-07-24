# Film Arama Uygulaması
[Film Arama Uygulaması](https://filmara.rf.gd) imdb üzerinden film araması yapan basit bir web uygulamasıdır.

## Açıklama
- **api_request_url:** Asıl api uygulaması ile tarayıcı arasındaki web servisinin istekleri kabul ettiği adrestir.
- **api dizini:** Aradaki api katmanını oluşturan uygulamayı oluşturan dosyalardır.
- **api/config/ dizini:** api ile  iletişim kurması için gerekli olan api key ve domain bilgilerinin, hassas verileirn tutulduğu dizindir.Bu veriler config php dosyasının içerisinde sabit olarak tanımlanmıştır.htaccess ile dizin şifrelenmiş ve htpasswd dosyası ara api sunucuda host edilen dizin dışında tutulmaktadır. 
- **api_url_parameters:** api url'ine gönderilecek olan parametreleri içerir.

```php
// Database
define("HOSTNAME","database_server_ip");
define("USER","database_user");
define("PASSWORD","database_password");
define("DATABASE","database_name");
define("PORT","database_server_port");
define("TABLE","visitor_table");
```
**config.php** dosyasına eklenen bu kayıtlarda veri tabanı bağlantısı için gerekli olan parametrelerdir.

- **db_table_script.php** dosyası örnek bir veritabanı tablo yapısıdır.

- **Database.php** : veri tabanı bağlantı,ekleme ve sorgu işlemlerini içeren sınıftır.
- **VisitorQuery.php** : Visitor için kayıt ekleyen ve ve kayıtları veri tabanından çekmek gerekli işlemlerin yapıldığı sınıf yapısıdır.
- **GetUserIdentity.php :** Kullanıcı bilgilerini alan fonksiyondur.
- **IdentityHash.php :** Kullanıcı bilgilerini hashleyen fonksiyondur.

**GetUserIdentity** ve  **GetHashIdentity** fonksiyonları uygulama amaçlı yapılmıştır sayaç için bu kadar karmaşaya gerek yoktur ancak gerçekten her kullanıcıyı tanımlayıp bunu sayaç verisi olarak tutabilmek için identity verisinin genişletilmesi gerekir.örn olarak bir kullanıcı defalarca sayfayı yenilemesi durumunda sayaç verisi gereksiz olarak büyüyecektir bunun önüne geçmek için siteye bağlanan kullanıcının User Agent verisi, ip adresi, geçtiği proxy sunucuların ip adresleri gibi bilgileirn tutulması kullanıcıyı tanımlayan verilerdir ve bu verilerin üzerinden çalışan tanımlanan bir sayaç artışı bir kullanıcı yüzlerce defada siteye eriştiğinde her seferin bu verilerin hash değerleri aynı olacaktır ve sayaç için kayıtlar yani hashler veri tabanına eklenmeden önce önceki hash değerleri karşılaştırılarak yeni hash değerlerinin buna göre eklenmesi sağlanabilir. Burada bu şekilde bir yapı uygulanmasının sebebi projenin zaten çokda kritik bir durumda olmayışı ve kullanım sıklığının olmayışıdır. 