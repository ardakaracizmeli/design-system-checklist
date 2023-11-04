export default {
  title: "Ana Bileşenler",
  description:
    "Bileşenler, kullanıcı arayüzleri için temel yapı taşlarıdır. Yeniden kullanılabilir bir bileşen kütüphanesi oluşturmak, ürün geliştirme iş akışınızı iyileştirerek tasarım ve teknik borcu azaltır ve süreci hızlandırır. Temel bileşenler, anlamını kaybetmeden granüler parçalara ayrılamaz.",
  sections: {
    "c-accordion": {
      title: "Akordeon (Accordion)",
      description:
        "Akordeon, tetikleyici elemanın basılmasıyla içerik bölgelerinin görünürlüğünü değiştiren bir yapıdır.",
      checklist: {
        "c-accordion-active": {
          title: "Etkin durum",
          description:
            "Akordeon, içerik görünürlüğünü değiştirmek için iki farklı durumda gelmelidir. Eğer bir akordeon tetikleyici bir simge görüntülerse, durumlar arasında görsel olarak fark olmalıdır.",
        },
        "c-accordion-composition": {
          title: "Bileşim",
          description:
            "İçerik alanı, diğer bileşenleri de içerecek şekilde çeşitli içerik türlerini destekleyecek kadar esnek olmalıdır.",
        },
        "c-accordion-transition": {
          title: "Geçiş animasyonu",
          description:
            "Kullanıcıların durumlar arasında geçiş yaparken bileşen davranışını anlamalarına yardımcı olacak hafif bir animasyon eklenmelidir.",
        },
        "c-accordion-a11y-relation": {
          title: "İçerik ve tetikleyici ilişkisi",
          description:
            "Yardımcı teknolojilerle içerik alanına odaklandığında, tetikleyici elemandan ilave bağlam bildirilmelidir.",
        },
      },
    },
    "c-alert": {
      title: "Uyarı (Alert)",
      description:
        "Uyarı, sayfanın tamamı veya belirli bir alanı hakkında önemli bir mesajı gösterir.",
      checklist: {
        "c-alert-colors": {
          title: "Renkler",
          description:
            "Uyarının görsel görünümünü rolüne göre ayırt etmek önemlidir. Rol ayrımı için arka plan renkleri kullanılıyorsa, uyarı içindeki içerikle yeterli kontrast oranının sağlandığından emin olunmalıdır.",
        },
        "c-alert-title": {
          title: "Başlık desteği",
          description:
            "Başlık kullanmak, uzun uyarı mesajlarında kullanıcının mesajın bağlamını daha hızlı anlamasına yardımcı olabilir.",
        },
        "c-alert-icon": {
          title: "Simge desteği",
          description:
            "Simge, uyarının rolünü gösterir ve renk körü insanlar için ek bir ipucu sağlar.",
        },
        "c-alert-actions": {
          title: "Ek işlemler",
          description:
            "Uyarı içindeki işlemler, metinleriyle ilgili olmalı ve kullanıcıya gönderilen mesaja tepki verme imkanı sağlamalıdır.",
        },
        "c-alert-responsive": {
          title: "Duyarlılık",
          description:
            "Uyarı, görüntüleme alanına göre uyum sağlayabilmeli ve mobil cihazlarda genellikle tam genişlikli hale gelerek alan tasarrufu sağlamalıdır.",
        },
        "c-alert-a11y-roles": {
          title: "Erişilebilirlik rolleri",
          description:
            "Yardımcı teknolojiler kullanıldığında uyarılar, erişilebilirlik rollerini doğru bir şekilde bildirmelidir.",
        },
      },
    },
    "c-avatar": {
      title: "Avatar",
      description:
        "Kullanıcı fotoğrafının küçük bir özeti, kuruluş veya diğer içerik türlerinin görsel temsili.",
      checklist: {
        "c-avatar-image": {
          title: "Görüntü (Image)",
          description:
            "Avatarlar, görüntüyü şekillerine uydurmalı ve bu görüntüyü bilinmeyen veri kaynaklarından alabilir, bu nedenle herhangi bir görüntü boyutu ile çalışabilmelidir.",
        },
        "c-avatar-image-fallback": {
          title: "Görüntü yedekleme",
          description:
            "Görüntü geçilmemesi durumunda veya bir görüntü yüklenme hatası olduğunda, avatarlar farklı bir görüntü, simge veya metin başlangıcı ile yedek gösterebilmelidir.",
        },
        "c-avatar-sizes": {
          title: "Boyutlar",
          description:
            "Avataru kullanmak için birçok bağlam vardır ve bileşen için farklı boyutları desteklemek önemlidir. Ortalama projeler için en az 2-3 farklı boyut kullanmalı ve en azından küçük bir boyutun bulunması sağlanmalıdır.",
        },
        "c-avatar-colors": {
          title: "Renkler",
          description:
            "Bir arka plan rengi, görüntü olmadan kullanıldığında avatar şekline uygulanmalıdır. Simge ve metnin arka planla yeterli kontrast oranına sahip olduğundan emin olunmalıdır (WCAG AA standardına göre).",
        },
        "c-avatar-shape": {
          title: "Şekil",
          description:
            "Avatarlar, kullanıldıkları alanlara bağlı olarak kare veya daire gibi birden fazla şekli destekleyebilir.",
        },
        "c-avatar-group": {
          title: "Avatar grupları",
          description:
            "Birden fazla avatar, bir kullanıcı grubunu temsil etmek için bir araya getirilebilir.",
        },
        "c-avatar-a11y-label": {
          title: "Erişilebilirlik etiketi",
          description:
            "Avatar, dekoratif olmayan görüntüler için kullanıldığında ve içeriğinin metin temsili olmadığında bir erişilebilirlik etiketi sağlamalıdır.",
        },
      },
    },
    "c-badge": {
      title: "Rozet (Badge)",
      description:
        "Nesnenin veya kullanıcı girdisinin durumunu temsil eden kompakt bir öğe.",
      checklist: {
        "c-badge-colors": {
          title: "Renkler",
          description:
            "Rozetler, ürününüzde çeşitli rolleri oynayabilir ve her rol için önceden belirlenmiş bir renge sahip olmak, kullanıcıların anlamlarını anlamalarına yardımcı olmalıdır. Renkleri değiştirirken, metnin arka planla yeterli kontrast oranına sahip olduğundan emin olunmalıdır (WCAG AA standardına göre).",
        },
        "c-badge-variants": {
          title: "Çeşitler",
          description:
            "Rozetlerin üründe hangi yerde göründüğüne bağlı olarak, birden fazla bileşen çeşidini destekleyebilir. Örneğin, dikkat çekmeyecek şekilde bazı rozetlerin soluk bir arka plan kullanmasını sağlayabilirsiniz.",
        },
        "c-badge-sizes": {
          title: "Boyutlar",
          description:
            "Rozetler, nerede kullanılacaklarına bağlı olarak birden fazla boyutta olabilir. Örneğin, pazarlama sayfalarında büyük boyut kullanılabilir.",
        },
        "c-badge-icon-support": {
          title: "Simge desteği",
          description:
            "Bir rozetin anlamını daha iyi açıklamak için metnin yanında bir simge görüntüleyebilirsiniz. Küçük rozetler için, simge içeriğinin hala tanınabilir olmasından emin olunmalıdır.",
        },
        "c-badge-dismiss": {
          title: "Kapatılabilir işlem",
          description:
            "Rozetler, seçili değerleri dinamik olarak göstermek için kullanılabilir ve kapatılabilecek bir yol olmalıdır.",
        },
        "c-badge-empty": {
          title: "Boş durum",
          description:
            "Rozetler, içeride herhangi bir metin içermeksizin kullanılabilir. Bu durumda, doğru şekli korumak için stillerini değiştirmek gerekebilir.",
        },
        "c-badge-positioning": {
          title: "Konumlandırma",
          description:
            "Bir bildirim göstergesi gibi bir durum rozeti olarak kullanıldığında, bunu ilgili öğelere göre konumlandırabilmelisiniz.",
        },
      },
    },

    "c-button": {
      title: "Buton",
      description: "Tek adımlı işlemler için kullanılan etkileşimli öğe.",
      checklist: {
        "c-button-colors": {
          title: "Renkler",
          description:
            "Butonlar ürününüzde çeşitli rolleri oynayabilir ve her rol için önceden belirlenmiş bir rengin olması, kullanıcıların anlamlarını anlamalarına yardımcı olmalıdır. Renkleri değiştirirken, metnin arka planla yeterli kontrast oranına sahip olduğundan emin olunmalıdır (WCAG AA standardına göre).",
        },
        "c-button-variants": {
          title: "Çeşitler",
          description:
            "Birden fazla buton kullanıyorsanız, birincil ve ikincil işlemler arasında ayrım yapılmalıdır. Butonlar, kullanıcı için farklı roller oynayabilir veya çeşitli yüzeylerde kullanılabilir ve görünümleri değişmelidir.",
        },
        "c-button-sizes": {
          title: "Boyutlar",
          description:
            "Bir butonun nerede kullanılacağına bağlı olarak birden fazla boyutta olabilir. Örneğin, yoğun alanlarda küçük boyut kullanılabilir.",
        },
        "c-button-icon": {
          title: "Simge desteği",
          description:
            "Simge, buton etiketinin yanında kullanıldığında butonun amacını kolayca iletebilir veya yetersiz alan olduğunda metin olmadan kullanılabilir. Yalnızca simge ile kullanıldığında erişilebilirlik etiketinin sağlandığından emin olunmalıdır.",
        },
        "c-button-hover": {
          title: "Üzerine gelme durumu",
          description:
            "Fare imleciyle üzerine gelindiğinde butonun etkileşimli olduğu açıkça gösterilmelidir.",
        },
        "c-button-active": {
          title: "Etkin durum",
          description:
            "Butona basıldığında, bir değer seçmek veya sayfadaki diğer öğeleri değiştirmek için görsel bir işaret sağlanmalıdır.",
        },
        "c-button-loading": {
          title: "Yükleniyor durumu",
          description:
            "Kullanıcıların bir butona bastıktan sonra sonuç için beklemesi gerektiği durumları belirtmelidir. Bu durumu göstermek için bir dönme simgesi kullanılıyorsa, simgenin orijinal buton genişliğini veya yüksekliğini değiştirmemesine dikkat edilmelidir.",
        },
        "c-button-disabled": {
          title: "Devre dışı durum",
          description:
            "Butonun etkileşimli olmadığını ve basılmasını engellediğini görsel olarak göstermelidir.",
        },
        "c-button-a11y-role": {
          title: "Erişilebilirlik rolü",
          description:
            "Buton, buton veya bağlantı erişilebilirlik rollerini doğru bir şekilde bildirmeli ve özelliklere göre otomatik olarak çözümlenmelidir.",
        },
        "c-button-a11y-focus": {
          title: "Odak göstergesi",
          description:
            "Buton, klavye veya yardımcı teknolojiler kullanılarak odaklandığında görünür bir odak göstergesi olmalıdır.",
        },
      },
    },
    "c-breadcrumbs": {
      title: "Ekmek Kırıntısı (Breadcrumbs)",
      description:
        "Kullanıcının mevcut sayfanın konumunu anlamasına ve üst sayfalara geri dönmesine yardımcı olan üst düzey ürün gezinmesi.",
      checklist: {
        "c-breadcrumbs-icon": {
          title: "Simge desteği",
          description:
            "Simge, ekmek kırıntısı öğelerinin bağlandığı sayfaların rollerini iletmeye yardımcı olur. Genellikle, rastgele öğeler için değil, sürekli olarak kullanılmalarını sağlamak önemlidir.",
        },
        "c-breadcrumbs-disabled": {
          title: "Devre dışı durum",
          description:
            "Listedeki her öğe ayrı ayrı devre dışı bırakılabilir, böylece kullanıcıların ilgili sayfaya gezinmesi engellenir.",
        },
        "c-breadcrumbs-collapsed": {
          title: "Daraltılmış durum",
          description:
            "Ekmek kırıntısı öğeleri üst öğe içine sığmazsa, liste daraltmayı desteklemeli ve kullanıcıya ilgili öğeleri görünür tutmalıdır.",
        },
        "c-breadcrumbs-separator": {
          title: "Özel ayraç",
          description:
            "Ekmek kırıntısı listesindeki öğeler, kullanım bağlamına göre farklı ayraç stillerini kullanabilir.",
        },
      },
    },
    "c-calendar": {
      title: "Takvim (Calendar)",
      description:
        "Bir veya daha fazla ayda günleri gösteren ve kullanıcıların tek bir tarih veya tarih aralığı seçmesine izin veren ızgara.",
      checklist: {
        "c-calendar-modes": {
          title: "Görüntüleme modları",
          description:
            "Takvim, çeşitli ürün alanlarında ve görüntüleme alanlarında kullanılabilir. Birden fazla ayı veya dikey bir düzeni görüntülemek için farklı görüntüleme modlarını desteklemek önemlidir.",
        },
        "c-calendar-selected": {
          title: "Seçili durum",
          description:
            "Takvim, tek bir tarihi ve bir seçim aralığını desteklemelidir. Seçilen tarihler görsel olarak vurgulanmalı ve seçilen tarihler arasındaki aralık kullanıcılar tarafından görülebilmelidir.",
        },
        "c-calendar-month-selection": {
          title: "Ay seçimi",
          description:
            "Kullanıcıların daha uzun tarih aralıklarına geçişi kolaylaştırmak için takvim, görüntülenen ayları değiştirmek için kolay bir yol sağlamalıdır.",
        },
        "c-calendar-day-names": {
          title: "Gün adları",
          description:
            "Kullanıcıların tarih seçimini daha kolay yapabilmesi için tarih numaralarının yanı sıra haftanın kısa etiketlerini sağlamak önemlidir.",
        },
        "c-calendar-i18n": {
          title: "Ulusal Dille Uyum",
          description:
            "Takvimler, ürün tarafından desteklenen tüm ülke bölgeleri için yerelleştirilmelidir. Bu, tarih biçimleri ve haftanın günlerinin doğru sıralanmasını içerir.",
        },
        "c-calendar-a11y-keyboard": {
          title: "Klavye gezinmesi",
          description:
            "Takvim tarihleri, klavye ve yardımcı teknolojilerle odaklanabilir olmalıdır. Tarihlerdeki daha fazla gezinme, klavye okları veya ekran okuyucu gezinme kullanılarak olmalı ve bir sütundan veya satırdan çıkılarak ay değiştirme desteği sağlamalıdır.",
        },
        "c-calendar-a11y-state": {
          title: "Durum bildirimi",
          description:
            "Seçilen tarihler, odaklandıklarında yardımcı teknolojiler tarafından bildirilmelidir.",
        },
      },
    },
    "c-card": {
      title: "Kart (Card)",
      description:
        "Konu ve ilgili eylemler hakkında bilgileri gruplamak için kullanılan bir kap.",
      checklist: {
        "c-card-composition": {
          title: "İçerik bileşimi",
          description:
            "İçerik alanı, diğer bileşenleri de içerecek şekilde esnek olmalıdır.",
        },
        "c-card-media-sections": {
          title: "Medya bölümleri",
          description:
            "Kartlar genellikle medya içeriğiyle birlikte kullanılır. En popüler seçeneklerden biri, içeriğin üzerinde tam genişlikte bir alanın veya kartın bir tarafında bir alanın bulunmasıdır.",
        },
        "c-card-actions": {
          title: "Ek eylemler",
          description:
            "Kartlar, genellikle kartın alt kısmında yer alan eylemlerle kullanılabilir, veya kartın kendisi tıklanabilir ve bir eylemi temsil edebilir.",
        },
        "c-card-responsive": {
          title: "Duyarlılık",
          description:
            "Mobil görünümlerde, kartlar genellikle içerik için alanı korumak için tam genişlikte olmalıdır.",
        },
        "c-card-groups": {
          title: "Kart grupları",
          description:
            "Birden çok kart, tek bir içerik bölümleri listesini temsil etmek için gruplandırılabilir.",
        },
      },
    },
    "c-carousel": {
      title: "Karousel (Carousel)",
      description:
        "Gruplanmış içeriği göstermek için kullanılan yatay kaydırılabilir alanlar.",
      checklist: {
        "c-carousel-navigation": {
          title: "Navigasyon kontrolleri",
          description:
            "Karousel, fare yerine dokunma olayları ile içeriğini gezinmek için erişilebilir olmalıdır.",
        },
        "c-carousel-composition": {
          title: "Öğe bileşimi",
          description:
            "Karousel öğelerinin içerik alanı, diğer bileşenleri de içerecek şekilde esnek olmalıdır.",
        },
        "c-carousel-item-size": {
          title: "Öğe boyutları",
          description:
            "Öğelerin düzeni, farklı içerik türlerini desteklemek için esnek olmalıdır. Mobil cihazlar için, görüntülenebilen alanı göstermek için karusel öğesinin bir kısmını göstermeye dikkat edin.",
        },
        "c-carousel-touch": {
          title: "Dokunma navigasyonu",
          description:
            "Karousel içeriği, dokunma olaylarını desteklemek için bir kaydırılabilir alan içinde olmalıdır.",
        },
        "c-carousel-responsive": {
          title: "Duyarlılık",
          description:
            "Karousel öğelerinin düzeni, mevcut alanın büyüklüğüne bağlı olarak ayarlamalar gerektirebilir.",
        },
        "c-carousel-a11y-keyboard-navigation": {
          title: "Klavye gezinmesi",
          description:
            "Klavye ve yardımcı teknolojileri kullanan kullanıcılar, navigasyon kontrollerine tıklamadan karusel içeriğini gezinebilmelidir.",
        },
      },
    },
    "c-checkbox": {
      title: "Onay Kutusu (Checkbox)",
      description:
        "Listeden bir veya birden fazla değer seçmek için kullanılan form alanı.",
      checklist: {
        "c-checkbox-label": {
          title: "Etiket",
          description:
            "Onay kutusu alanı ile bağlantılı bir metin etiket olmalıdır. Etikete tıklamak, onay kutusunu da seçmelidir. Etiket sayfada görüntülenmiyorsa, yardımcı teknolojiler yine de etiketi açıklamalıdır.",
        },
        "c-checkbox-checked": {
          title: "Seçili durum",
          description:
            "Onay kutusu seçildiğinde ve form gönderiminde kullanıldığında gösterilmelidir.",
        },
        "c-checkbox-error": {
          title: "Hata durumu",
          description:
            "Form doğrulamasında onay kutusu alanı ile ilgili bir hata oluştuğunda hata durumu kullanılmalıdır. Hatalı durum, farklı bir alan rengi ve metin hata mesajı ile gösterilmelidir.",
        },
        "c-checkbox-disabled": {
          title: "Devre dışı durum",
          description:
            "Devre dışı durum, onay kutusu etkileşimlerini engellemek ve gönderilen form değerlerinden kaldırmak için kullanılmalıdır.",
        },
        "c-checkbox-indeterminate": {
          title: "Belirsiz durum",
          description:
            "Onay kutusu, altında seçilebilir öğeleri olan durumları görsel olarak gösterebilir.",
        },
        "c-checkbox-group": {
          title: "Onay Kutusu Grubu",
          description:
            "Onay kutuları, aynı anda birden fazla değeri işlemek için gruplandırılabilir.",
        },
        "c-checkbox-a11y-keyboard": {
          title: "Klavye desteği",
          description:
            "Onay kutusu seçimleri, klavyeyle tetiklenmelidir. Bunun için doğal öğeler kullanmak, bu tür etkileşimleri otomatik olarak sağlar.",
        },
      },
    },
    "c-divider": {
      title: "Bölücü (Divider)",
      description: "Görsel içerik ayırma elemanı.",
      checklist: {
        "c-divider-direction": {
          title: "Yön",
          description:
            "Bölücüler, hem yatay hem de dikey içerik listelerini ayırmalıdır.",
        },
        "c-divider-a11y-role": {
          title: "Erişilebilirlik rolü",
          description:
            "Bölücü, düzen içinde dekoratif olmayan bir rol oynuyorsa, rolü yardımcı teknolojiler tarafından duyurulmalıdır.",
        },
      },
    },
    "c-dropdown": {
      title: "Açılır Menü (Dropdown)",
      description:
        "Kullanıcıların tetikleyebileceği bağlamsal eylemlerin listesi.",
      checklist: {
        "c-dropdown-composition": {
          title: "İçerik bileşimi",
          description:
            "Açılır menüler, bağlam menüleri, ürün gezintisi ve diğer amaçlar için kullanılabilir. İçerik alanı, diğer bileşenleri de içerecek şekilde esnek olmalıdır.",
        },
        "c-dropdown-hover": {
          title: "Üzerine gelme tetikleyici",
          description:
            "Açılır menü, içeriğini üzerine gelme olaylarıyla görüntülemeyi desteklemelidir. Aynı davranış, klavye kullanıcıları için tetikleyici odaklandığında da gerçekleşmelidir.",
        },
        "c-dropdown-positioning": {
          title: "Dinamik konumlandırma",
          description:
            "Açılır menü içeriği, tetikleyici öğenin ekran üzerindeki mevcut konumuna göre görüntülenmeli ve her zaman kullanıcı tarafından görülebilir olmalıdır.",
        },
        "c-dropdown-responsive": {
          title: "Duyarlılık",
          description:
            "Açılır menü içeriği, mobil cihazlarda masaüstünde olduğu gibi ekrana sığmazsa düzenlenmelidir.",
        },
        "c-dropdown-a11y-focus": {
          title: "Odak kapatma",
          description:
            "Açılır menü içeriği açıldığında, kullanıcı odakı içerik alanının içine almalı ve kapatıldığında odakı en son etkin öğeye geri dönmelidir.",
        },
        "c-dropdown-a11y-keyboard": {
          title: "Klavye gezinmesi",
          description:
            "Açılır menü, klavye ve yardımcı teknolojiler için erişilebilir olmalıdır. Kullanıcılar, içerik alanının dışına çıktıktan sonra açılır menüyü kapatmak için ayrı bir kapatma eylemi kullanabilmelidir.",
        },
      },
    },
    "c-icon": {
      title: "Simge (Icon)",
      description:
        "Görünümünü kontrol etmek için SVG varlıklarını saran bileşen.",
      checklist: {
        "c-icon-colors": {
          title: "Renkler",
          description:
            "Simge, tasarım sistemine ait renk değerlerini desteklemelidir. Ayrıca, ebeveyn öğesinden renk mirası alma özelliğini desteklemek iyi bir uygulamadır.",
        },
        "c-icon-sizes": {
          title: "Boyutlar",
          description:
            "Simge, ürününüzde tutarlı bir deneyim sağlamak için birkaç önceden tanımlanmış boyuta sahip olmalıdır. Bu boyut değerleri için tipografi eşlemeleri kullanılabilir, böylece metin boyutları ile uyumlu olacak şekilde ayarlanır.",
        },
        "c-icon-a11y-decoration": {
          title: "Etkileşim",
          description:
            "Simge, genellikle dekoratif öğeler olarak kullanılır. Bir simge etkileşimli olacak şekilde tasarlanmışsa, bu işlevsellik düğmeler, bağlantılar veya diğer etkileşimli bileşenler kullanılarak sağlanmalıdır.",
        },
      },
    },
    "c-image": {
      title: "Resim (Image)",
      description:
        "Resimleri görüntülemek ve davranışlarını kontrol etmek için kullanılan bir yardımcı bileşen.",
      checklist: {
        "c-image-sizes": {
          title: "Boyutlar",
          description:
            "Resim, desteklenen boyutlar açısından esnek olmalıdır. Yalnızca genişlik ve yükseklik desteği sağlamakla kalmamalı, aynı zamanda ebeveyn öğeye göre oranını dinamik olarak ölçeklendirecek şekilde en boy oranı desteği de eklemelisiniz.",
        },
        "c-image-fallback": {
          title: "Resim yedekleme",
          description:
            "Resim URL'si yanlış veya tanımsız olduğunda bir yedekleme görüntüsü gösterilmelidir. Bu, arka planı boş bir kutu, bir simge veya statik bir yer tutucu resim olabilir.",
        },
        "c-image-density": {
          title: "Ekran yoğunluğu desteği",
          description:
            "Ekran yoğunluğuna bağlı olarak, farklı boyutlarda birden fazla resim varlığını yüklemeyi desteklemeli ve kullanıcıya uygun olanı sunmalısınız.",
        },
        "c-image-a11y-alt": {
          title: "Alternatif metin",
          description:
            "Resim dekoratif değilse, içeriğini açıklayan bir alternatif metin sağlamalıdır.",
        },
      },
    },
    "c-link": {
      title: "Bağlantı (Link)",
      description:
        "Metin paragrafları içinde gezinme için kullanılan etkileşimli metin öğesi.",
      checklist: {
        "c-link-icon": {
          title: "Simge desteği",
          description:
            "Bir bağlantının yanında simge kullanılabilir ve simgeler metin etiketi olmadan bir bağlantı içinde kullanılmamalıdır.",
        },
        "c-link-colors": {
          title: "Renkler",
          description:
            "Bağlantılar, ürününüzde farklı rolleri oynayabilir ve her rol için önceden tanımlanmış bir renge sahip olmak, kullanıcıların anlamalarına yardımcı olabilir. Bağlantı, bir metin öğesi olduğu için, diğer metin içeriğiyle aynı renk mirasını otomatik olarak alabilmelidir.",
        },
        "c-link-disabled": {
          title: "Devre dışı durum",
          description:
            "Görsel olarak bağlantının etkileşime geçilemediğini göstermeli ve tıklanmasını engellemelidir.",
        },
        "c-link-font-inheritance": {
          title: "Yazı tipi mirası",
          description:
            "Bağlantılar, bir metin öğesi olarak kullanıldığında tipografi stillerini miras alabilmelidir.",
        },
        "c-link-multiline": {
          title: "Çok satırlı görüntü",
          description:
            "Metin paragrafı içinde kullanıldığında, bağlantılar çok satırlı görüntüyü desteklemelidir ve metin akışını bozmamalıdır.",
        },
        "c-link-a11y-role": {
          title: "Erişilebilirlik rolü",
          description:
            "Bağlantılar, düğme veya bağlantı erişilebilirlik rollerini doğru bir şekilde duyurmalı ve bu özelliklere dayalı olarak otomatik olarak çözümlenmelidir.",
        },
      },
    },
    "c-list": {
      title: "Liste (List)",
      description: "Öğelerin bir listesini göstermek için kullanılır.",
      checklist: {
        "c-list-order": {
          title: "Sıralama",
          description:
            "Liste öğeleri, benzer şekillerde sıralamaları ve türleri kullanarak sıralanabilir.",
        },
        "c-list-composition": {
          title: "İçerik bileşimi",
          description:
            "Liste öğesi içerik alanları, diğer bileşenleri de içerecek şekilde esnek olmalıdır.",
        },
        "c-list-a11y-role": {
          title: "Erişilebilirlik rolü",
          description:
            "Yardımcı teknolojiler, doğru rol ve görüntülenen öğe sayısı ile listeleri duyurmalıdır.",
        },
      },
    },
    "c-loading-indicator": {
      title: "Yükleniyor Göstergesi (Loading Indicator)",
      description:
        "Uzun süren veya birkaç adımdan oluşan bir görev için ilerlemeyi ileten animasyonlu bir öğe.",
      checklist: {
        "c-loading-indicator-colors": {
          title: "Renkler",
          description:
            "Yükleniyor göstergeleri, çeşitli rollerdeki öğelerin içine yerleştirilebilir ve onların renk şemasını takip etmelidir.",
        },
        "c-loading-indicators-sizes": {
          title: "Boyutlar",
          description:
            "Yükleniyor göstergeleri, gösterildikleri alana bağlı olarak birden fazla boyut sağlayabilir.",
        },
        "c-loading-indicator-time": {
          title: "Yükleme süresi",
          description:
            "Bazı durumlarda, bekleme süresi belirlenemez. Yükleniyor göstergesi, yükleme tamamlandığında veya bir hata oluştuğunda gösterilmelidir. Diğer durumlarda, yükleme süresinin bitimine kadar kalan zamanı göstermek daha iyi olabilir.",
        },
        "c-loading-indicator-a11y-reduced-motion": {
          title: "Azaltılmış hareket",
          description:
            "Yükleniyor göstergesi, sistem hareket ayarları ile senkronize olmalı ve azaltılmış hareket ayarları etkin olduğunda animasyon hızını azaltmalıdır.",
        },
        "c-loading-indicator-a11y-label": {
          title: "Erişilebilirlik etiketi",
          description:
            "Yükleniyor göstergesi yalnızca bağımsız bir göstergesi ise, yüklenmekte olan içerik alanı için erişilebilirlik etiketi sağlanmalıdır.",
        },
      },
    },
    "c-modal": {
      title: "Modal",
      description:
        "Ana içeriğin önünde görünen ve kritik bilgi veya etkileşimli içerik sağlayan bir bileşen.",
      checklist: {
        "c-modal-composition": {
          title: "İçerik bileşimi",
          description:
            "Ana içerik alanı, diğer bileşenleri de içerecek şekilde esnek olmalıdır.",
        },
        "c-modal-actions": {
          title: "Ek eylemler",
          description:
            "Modal içindeki içerik, etkileşimli olabileceğinden, eylem öğeleri için bir alan sağlamak önemlidir. Bu alan genellikle modal kutusunun altında bulunur.",
        },
        "c-modal-close": {
          title: "Kapatma eylemi",
          description:
            "Modal, açık olduğunda içeriği engellediğinden, basit bir kapatma yolunun olması önemlidir. Bu ya ayrı bir kapatma düğmesi olabilir veya ek eylemlerden biri olabilir.",
        },
        "c-modal-positioning": {
          title: "Konumlandırma",
          description:
            "Modal, ekranın ortasında konumlandırılabilir veya ekranın her iki yanında kayan paneller olarak görüntülenebilir.",
        },
        "c-modal-sizes": {
          title: "Boyutlar",
          description:
            "Modalin içinde gösterilecek içeriğe göre modal yüksekliğini ve genişliğini değiştirme desteği sağlamalısınız.",
        },
        "c-modal-a11y-focus": {
          title: "Odak hapsi",
          description:
            "Modal açıldığında, kullanıcı odaklanabilir öğe, içerik alanının ilk odaklanabilir öğesine taşınmalı ve kapatıldığında odak en son etkin öğeye geri dönmelidir.",
        },
        "c-modal-a11y-keyboard": {
          title: "Klavye gezinmesi",
          description:
            "Modali kapatmak için Esc tuşuna basarak kapatabilmek ve modal kutusunun içindeki tüm odaklanabilir öğelere klavye gezinmesi ile erişilebilir olması önemlidir.",
        },
        "c-modal-a11y-labels": {
          title: "Başlık ve alt başlık etiketleme",
          description:
            "Modaller, doğru erişilebilirlik rolünü kullanmalı ve başlık ve alt başlık öğeleri tarafından etiketlenmelidir. Eğer görünür bir başlık veya alt başlık yoksa, bunun yerine bir erişilebilirlik etiketi kullanılabilir.",
        },
      },
    },
    "c-pagination": {
      title: "Sayfalandırma (Pagination)",
      description: "Bir sayfa aralığından seçim yapmayı sağlar.",
      checklist: {
        "c-pagination-selected": {
          title: "Seçili sayfa durumu",
          description:
            "Seçili sayfayı liste içinde görsel olarak vurgulayın ve etkileşime geçilemeyecek hale getirin.",
        },
        "c-pagination-ranges": {
          title: "Sayfa aralığı",
          description:
            "Seçilen sayfanın etrafında render edilecek sayfa aralıklarını tanımlayın. Bu, sadece sınırlı sayıda sayfayı render etmenize, ancak kullanıcıların birer birer gitmekten daha hızlı gezinmelerine olanak tanır.",
        },
        "c-pagination-amount": {
          title: "Sayfa başına öğe sayısı",
          description:
            "Sayfalara bölünecek öğe sayısını seçme olanağı sağlayın.",
        },
        "c-pagination-indeterminate": {
          title: "Belirsiz sayfa sayısı",
          description:
            "Toplamda kaç sayfa olduğu önceden bilinmiyorsa, sayfaları bireysel olarak gezinmek için farklı bir görüntüleme modu kullanın.",
        },
        "c-pagination-a11y-label": {
          title: "Tam sayfa etiketi bildirimleri",
          description:
            "Sayfalandırma, yardımcı teknolojiler için her sayfa için açıklayıcı, dinamik etiketler sağlamalıdır, yalnızca numarayı duyurmak yeterli olmamalıdır.",
        },
        "c-pagination-a11y-state": {
          title: "Durum bildirimi",
          description:
            "Sayfalandırma, seçili sayfa odaklandığında bildirimde bulunmalıdır.",
        },
      },
    },
    "c-progress": {
      title: "İlerleme Çubuğu (Progress Bar)",
      description:
        "Uzun süren bir iş veya birkaç adımdan oluşan bir görev için ilerlemeyi gösteren bir çubuk.",
      checklist: {
        "c-progress-label": {
          title: "Etiket",
          description:
            "İlerleme çubuğunun ne hakkında olduğunu açıklayan bir etiketin görsel olarak desteklenmesini sağlayın.",
        },
        "c-progress-sizes": {
          title: "Boyutlar",
          description:
            "Yükleniyor göstergeleri, gösterildikleri alana bağlı olarak birden fazla boyut sağlayabilir.",
        },
        "c-progress-duration": {
          title: "Süre",
          description:
            "Bazı durumlarda, bekleme süresi belirlenemez. Yükleniyor göstergesi, yükleme tamamlandığında veya bir hata oluştuğunda gösterilmelidir. Diğer durumlarda, yükleme süresinin bitimine kadar kalan zamanı göstermek daha iyi olabilir.",
        },
        "c-progress-a11y-label": {
          title: "Erişilebilirlik etiketi",
          description:
            "Arayüzde etiket gösterilemiyorsa, bir erişilebilirlik etiketi eklemek için destek sağlamalısınız.",
        },
      },
    },
    "c-radio": {
      title: "Input radio",
      description:
        "Radio is a form element used for selecting one option from a list.",
      checklist: {
        "c-radio-label": {
          title: "Label",
          description:
            "There should be a text label linked with the radio field. Clicking the label should also trigger the checkbox selection. If the label is not rendered on the page, assistive technologies should still announce it.",
        },
        "c-radio-checked": {
          title: "Checked state",
          description:
            "Display when the radio gets selected and is used for the form submission.",
        },
        "c-radio-error": {
          title: "Error state",
          description:
            "Use an error state for form validation when the error is related to the radio field. Always use a text error along with a different field color.",
        },
        "c-radio-disabled": {
          title: "Disabled state",
          description:
            "Use a disabled state to prevent radio interactions and remove its value from the submitted form values.",
        },
        "c-radio-group": {
          title: "Radio group",
          description:
            "Radio buttons are always used as a group to avoid locking the selection after one of the radio buttons is checked.",
        },
        "c-radio-a11y-keyboard": {
          title: "Keyboard support",
          description:
            "Radio selection should be triggered with the keyboard. Using native elements for this should provide this kind of interaction automatically.",
        },
      },
    },
    "c-select": {
      title: "Select",
      description:
        "Select lets you choose a single value from a list of options.",
      checklist: {
        "c-select-label": {
          title: "Label",
          description:
            "Text labels linked with the Select field can provide users with additional context. Clicking the label should also trigger the select dropdown.",
        },
        "c-select-error": {
          title: "Error state",
          description:
            "Use an error state for form validation when the error is related to the select only. Display an additional error icon for better accessibility.",
        },
        "c-select-disabled": {
          title: "Disabled state",
          description:
            "Use the disabled state to prevent Select interactions and remove its value from the submitted form values.",
        },
        "c-select-placeholder": {
          title: "Placeholder",
          description:
            "When no value is selected – display a placeholder value. You can use the same placeholder value to let users reset the select value back to the default.",
        },
        "c-select-helper": {
          title: "Helper text",
          description:
            "Provide users with additional context about the select purpose and the requirements for the selection.",
        },
        "c-select-icon": {
          title: "Icon support",
          description:
            "Add an area for displaying an icon at the start of the field to communicate the purpose of the Select as a component or the selected value.",
        },
        "c-select-prefix": {
          title: "Prefix",
          description:
            "Add an area for custom content to make the selection more contextual for the user. For example, you can display country flags in your country code selection.",
        },
        "c-select-sizes": {
          title: "Sizes",
          description:
            "Depending on where select is going to be used, it can come in multiple sizes. For example, you can use the small size for dense areas of your application.",
        },
        "c-select-a11y-label": {
          title: "Accessibility label",
          description:
            "In case you don’t provide a visual text label for select, make sure to provide an accessibility label still describing the purpose of the component.",
        },
      },
    },
    "c-skeleton": {
      title: "Skeleton",
      description:
        "Placeholder replacing page elements while their data is loading.",
      checklist: {
        "c-skeleton-sizes": {
          title: "Sizes",
          description:
            "Skeleton should be able to match components of various sizes available in your design system to avoid unnecessary layout shifts once data is loaded.",
        },
        "c-skeleton-shapes": {
          title: "Shapes",
          description:
            "Skeleton should be able to match components of various shapes available in your design system to keep the loading state aligned with the actual components' layout.",
        },
        "c-skeleton-composition": {
          title: "Composition",
          description:
            "You can compose simple skeletons into more advanced layouts. You don’t have to 1:1 map your application interface with skeletons.",
        },
        "c-skeleton-a11y-motion": {
          title: "Reduced motion",
          description:
            "Reduce or altogether remove the animation for the reduced motion user preference.",
        },
      },
    },
    "c-switch": {
      title: "Switch",
      description:
        "Toggle for immediately changing the state of a single item.",
      checklist: {
        "c-switch-label": {
          title: "Label",
          description:
            "There should be a text label linked with the switch. Clicking the label should also trigger the switch selection. If the label is not rendered on the page, assistive technologies should still announce it.",
        },
        "c-switch-checked": {
          title: "Checked state",
          description:
            "Display when the switch gets selected and activates the underlying functionality. Often, a switch is used to immediately update the data after it’s selected.",
        },
        "c-switch-disabled": {
          title: "Disabled state",
          description: "Use a disabled state to prevent switch interactions.",
        },
        "c-switch-a11y-keyboard": {
          title: "Keyboard navigation",
          description:
            "Switch selection should be triggered with the keyboard. Using native elements for this should provide this kind of interaction automatically.",
        },
        "c-switch-a11y-label": {
          title: "Accessibility label",
          description:
            "In case you don’t provide a visual text label for Switch, make sure to provide an accessibility label still describing the purpose of the component.",
        },
      },
    },
    "c-tabs": {
      title: "Tabs",
      description: "Navigation between multiple pages or content sections.",
      checklist: {
        "c-tabs-composition": {
          title: "Content composition",
          description:
            "Content area should be flexible enough to support various types of content, including other components.",
        },
        "c-tabs-variants": {
          title: "Variants",
          description:
            "To support different rendering contexts, tabs might support multiple variants. For example, they might be rendered as pills when used directly on the page while using an underlined variant for tabs rendered inside cards.",
        },
        "c-tabs-selected": {
          title: "Selected state",
          description:
            "Since tabs always display the content from one of their panels, one of the tab triggers should always be selected and highlighted visually.",
        },
        "c-tabs-disabled": {
          title: "Disabled state",
          description:
            "Tab triggers can be disabled to prevent users from switching to a specific tab panel.",
        },
        "c-tabs-icon": {
          title: "Icon support",
          description:
            "To better illustrate the meaning of each tab, you can display an icon next to the tab trigger text.",
        },
        "c-tabs-equal": {
          title: "Equal width layout",
          description:
            "When used to take the entire width of the parent container, tab triggers can be stretched to take equal horizontal space.",
        },
        "c-tabs-a11y-keyboard": {
          title: "Keyboard support",
          description:
            "When interacting with tabs using the keyboard, they should support arrow navigation to switch between the previous and next panels. The Home and End buttons should also move the selection to the first and last panels, respectively.",
        },
      },
    },
    "c-text-area": {
      title: "Text area",
      description: "Form field to enter and edit multiline text.",
      checklist: {
        "c-text-area-label": {
          title: "Label",
          description:
            "Text labels linked with the text area can provide users with additional context. Clicking the label should move the focus to the field.",
        },
        "c-text-area-error": {
          title: "Error state",
          description:
            "Use an error state for form validation when the error is related only to the Text area.",
        },
        "c-text-area-disabled": {
          title: "Disabled state",
          description:
            "Use a disabled state to prevent text area interactions and remove its value from the submitted form values.",
        },
        "c-text-area-placeholder": {
          title: "Placeholder",
          description:
            "When the text area value is empty – display a placeholder value. Make sure that it’s not used instead of the label.",
        },
        "c-text-area-helper": {
          title: "Helper text",
          description:
            "Provide users with additional context about the Text area purpose and the requirements for the expected value.",
        },
        "c-text-area-sizes": {
          title: "Sizes",
          description:
            "Depending on where the text area will be used, it can come in multiple sizes. For example, you can use the large size for the forms on marketing pages.",
        },
        "c-text-area-a11y-label": {
          title: "Accessibility label",
          description:
            "In case you don’t provide a visual text label for the text area, make sure to provide an accessibility label still describing the purpose of the component.",
        },
      },
    },
    "c-text-field": {
      title: "Text field",
      description: "Form field to enter and edit single-line text.",
      checklist: {
        "c-text-field-label": {
          title: "Label",
          description:
            "Text labels linked with the text field can provide users with additional context. Clicking the label should move the focus to the field.",
        },
        "c-text-field-error": {
          title: "Error state",
          description:
            "Use an error state for form validation when the error is related only to the text field.",
        },
        "c-text-field-disabled": {
          title: "Disabled state",
          description:
            "Use a disabled state to prevent text field interactions and remove its value from the submitted form values.",
        },
        "c-text-field-placeholder": {
          title: "Placeholder",
          description:
            "When the text field value is empty – display a placeholder value. Make sure that it’s not used instead of the label.",
        },
        "c-text-field-helper": {
          title: "Helper text",
          description:
            "Provide users with additional context about the text field purpose and the requirements for the expected value.",
        },
        "c-text-field-icon": {
          title: "Icon support",
          description:
            "Add an area for displaying an icon at the start of the field to communicate the purpose of the text field as a component or the field value.",
        },
        "c-text-field-affix": {
          title: "Prefix / Suffix",
          description:
            "Add an area for custom content to make the selection more contextual for the user. For example, you can display payment providers in the text field for credit card numbers.",
        },
        "c-text-field-sizes": {
          title: "Sizes",
          description:
            "Depending on where the text field will be used, it can come in multiple sizes. For example, you can use the large size for the forms on marketing pages.",
        },
        "c-text-field-a11y-label": {
          title: "Accessibility label",
          description:
            "In case you don’t provide a visual text label for the text field, make sure to provide an accessibility label still describing the purpose of the component.",
        },
      },
    },
    "c-toast": {
      title: "Toast",
      description:
        "Notification message or a piece of information displayed above the page content.",
      checklist: {
        "c-toast-composition": {
          title: "Content composition",
          description:
            "Content area should be flexible enough to support various types of content, including other components.",
        },
        "c-toast-colors": {
          title: "Colors",
          description:
            "Depending on the role of the notification displayed in the toast, it can come in multiple colors. For example, it can be colored red for error notifications.",
        },
        "c-toast-icon": {
          title: "Icon support",
          description:
            "Add an area for displaying an icon at the start of the toast to communicate the purpose of the notification.",
        },
        "c-toast-timeout": {
          title: "Timeout",
          description:
            "Toasts are usually dismissed after a timeout. Make sure to provide a long enough timeout to let the users read the message. If there is no timeout – provide a button to close the notification.",
        },
        "c-toast-stacking": {
          title: "Stacking",
          description:
            "When multiple toasts have been triggered, stack them on top of each other to avoid cluttering the screen.",
        },
        "c-toast-action": {
          title: "Supplementary action",
          description:
            "Actions in the notifications should be contextual to the notification purpose. For example, if you notify the user about deleting content, an action element can help them undo this operation.",
        },
        "c-toast-a11y-focus": {
          title: "Focus management",
          description:
            "When toasts have actions, they should be focusable from the keyboard to trigger them. While the focus is inside the toast container – timeout should get disabled.",
        },
        "c-toast-a11y-motion": {
          title: "Reduced motion",
          description:
            "Reduce or altogether remove the animation for the reduced motion user preference.",
        },
      },
    },
    "c-tooltip": {
      title: "Tooltip",
      description:
        "Contextual text information display on element hover or focus.",
      checklist: {
        "c-tooltip-positioning": {
          title: "Positioning",
          description:
            "When the tooltip default position doesn’t let it fit into the viewport – make sure to dynamically switch its position to another value.",
        },
        "c-tooltip-timeout": {
          title: "Timeout",
          description:
            "Wait briefly before opening the Tooltip to ensure they don’t open while the user moves their cursor around the screen.",
        },
        "c-tooltip-a11y-keyboard": {
          title: "Keyboard support",
          description:
            "Tooltips should be accessible not only on mouse hover but also on the trigger element focus. ",
        },
      },
    },
  },
};
