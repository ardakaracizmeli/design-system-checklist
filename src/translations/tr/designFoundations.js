export default {
  title: "Temeller",
  description:
    "Renk ve tipografi gibi tasarım sisteminizin temel katmanları için değerleri depolayan ve bileşenlerde kullanılan tasarım varlıkları ve sembollerdir. Bu seviyedeki değişiklikler tüm sisteme yansıyacaktır.",
  sections: {
    "df-color": {
      title: "Renk",
      description:
        "Markanızı sergilemenin yanı sıra kullanıcılarınızla etkili bir şekilde iletişim kurmanın da bir yoludur. Estetik yerine amaç odaklı oluşturulan renk paletleri, arayüzünüze anlam katmanıza yardımcı olarak sezgisel tasarım desenleri geliştirmenize yardımcı olur.",
      checklist: {
        "df-color-a11y": {
          title: "Erişilebilirlik",
          description:
            "Paletinizdeki ana renkler arasında erişilebilir eşleşmeler olduğundan emin olun. Daha önemlisi, arka plan ve metin renklerinin en az bir AA standart kontrast oranına sahip olduğundan emin olun.",
        },
        "df-color-semantic": {
          title: "Anlamsal Renkler",
          description:
            "Marka renklerinizin yanı sıra devre dışı durumlar, arka planlar, eylemler ve yüksek kontrastlı metin gibi işlevler için renkleri tanımlayın ve değişkenlere dönüştürün.",
        },
        "df-color-dark-mode": {
          title: "Karanlık Mod",
          description:
            "Renk paletinizin karanlık mod sürümünü hazırlamak, tasarım sisteminizin kullanıcının işletim sistemi renk tercihlerine uyum sağlamasını sağlar.",
        },
        "df-color-guidelines": {
          title: "Kılavuzlar",
          description:
            "Paletinizdeki renkleri nasıl ve ne zaman kullanacakları, onlarla çalışırken nelere dikkat edecekleri ve nasıl kullanmayacakları konusunda kılavuzlar sağlayın.",
        },
      },
    },
    "df-layout": {
      title: "Düzen",
      description:
        "İyi düşünülmüş bir düzen uzun bir yol kat eder. Düzeninizde sürekli bir kılavuz ve boşluk kullanmak, kullanıcıların arayüzü taramasını ve içeriği anlamasını kolaylaştırır.",
      checklist: {
        "df-layout-units": {
          title: "Birimler",
          description:
            "Birimler, düzen için en ayrıntılı yapı taşlarıdır. Bir 4 birimli sistem için (örneğin 4, 8, 12 ve 16) tutarlı artışlarla bir dizi değeri tanımlamak, ızgara ve boşluk değerlerinizi tasarlamanız için temel oluşturacaktır.",
        },
        "df-layout-grid": {
          title: "Izgara",
          description:
            "Her düzen, arayüzde düzen ve hiyerarşi getiren bir ızgara üzerine oturmalıdır. Mobil, tablet ve masaüstü cihazlar için ayrı ayrı sütunlar, aralıklar ve kenar boşlukları belirleyerek arayüzünüzü hızlı bir şekilde herhangi bir platforma uyumlu hale getirin.",
        },
        "df-layout-breakpoints": {
          title: "Ayrıştırıcı Noktalar",
          description:
            "Izgaranızın uyum sağlayacağı ekran boyutlarını ve yönelimleri önceden tanımlayın.",
        },
        "df-layout-spacing": {
          title: "Boşluk",
          description:
            "Yatay ve dikey ritim, bir düzen içinde önemli bir rol oynar. Izgaranızdan bağımsız olarak arayüz öğeleri arasına boşluk eklemek için basit yöntemler sağlamalısınız.",
        },
      },
    },
    "df-typography": {
      title: "Tipografi",
      description:
        "Tipografi, içeriği ürünlerde yüzeye çıkaran ana yollardan biridir. Tipografinizde açık bir hiyerarşi ve karşıtlık sağlayan ölçeklemeler, şeyleri daha okunabilir hale getirecek ve ürününüzün genel yapısına yardımcı olacaktır. Ayrıca marka karakterinizi ve varlığınızı görselleştirmek için bir fırsattır.",
      checklist: {
        "df-typography-mobile": {
          title: "Duyarlılık",
          description:
            "Masaüstü cihazlar genellikle mobil cihazlara göre daha büyük font boyutlarına sahip olabilir. Görünüm boyutuna uyum sağlayan bir tipografi ölçeği oluşturmak, daha anlamlı bir hiyerarşi ve düzen oluşturmanıza yardımcı olur.",
        },
        "df-typography-grid": {
          title: "Izgara İlişkisi",
          description:
            "Yazı tipi boyutları ve çizgi aralığı, metni ve diğer UI öğelerini daha iyi eşleştirmek için ızgaranıza uymalıdır. İyi bir örnek, metni sınırlayıcı kutularla eşleştirilen simgelerle eşleştirmektir.",
        },
        "df-typography-readability": {
          title: "Okunabilirlik",
          description:
            "Tipografi ölçeğiniz için harf aralığını (izleme), satır yüksekliğini (çizgi aralığı) ve satır uzunluğunu optimize ederek metnin okunabilirliğine yardımcı olun.",
        },
        "df-typography-performance": {
          title: "Performans",
          description:
            "Özellikle web üzerinde özel yazı tipleri görüntülenmeden önce indirilmelidir. Tipografi varlıklarınız için mantıklı yedekler ve hızlı yükleme süresine sahip olduğunuzdan emin olun. Sistem yazı tipleri kullanmak, bu performans sorununu çözer.",
        },
        "df-typography-guidelines": {
          title: "Kılavuzlar",
          description:
            "Tipografi ölçeğinizdeki eşleştirmeleri nasıl ve ne zaman kullanacakları, onlarla çalışırken nelere dikkat edecekleri ve nasıl kullanmayacakları konusunda kılavuzlar sağlayın.",
        },
      },
    },
    "df-elevation": {
      title: "Yükseltme",
      description:
        "Yükseltme, z ekseninde iki yüzey arasındaki göreli mesafeyi kontrol eder. Işık modunda, genellikle yüzeye uygulanan gölge değeri ile vurgulanırken, karanlık modda, arka plan rengi değeri kullanılarak iletilir.",
      checklist: {
        "df-elevation-shadows": {
          title: "Gölge",
          description:
            "Desteklenen yükseltme seviyelerine dayanarak birden çok gölge değeri sağlayın. Çoğu zaman, ürününüzde 3 ila 4 yükseltme seviyesine ihtiyacınız olacaktır.",
        },
        "df-elevation-background": {
          title: "Arka Plan Renkleri",
          description:
            "Her gölge değeri bir bağlantılı arka plan rengi içermelidir. Işık modunda, bu renkler genellikle gölgeyle birlikte beyaz renge çözümlenir. Karanlık modda, yüzeyin z eksen uzaklığını iletmek için gölge yerine kullanılacaklardır.",
        },
        "df-elevation-z": {
          title: "Z-indeks",
          description:
            "Öğelerin önceliğini kontrol etmek için bir z-indeks değeri sistemi tanımlayın.",
        },
      },
    },
    "df-motion": {
      title: "Hareket",
      description:
        "Paylaşılan hareket değerleri daha tutarlı bir kullanıcı deneyimi ve markayla daha iyi bir uyum sağlar.",
      checklist: {
        "df-motion-easing": {
          title: "Hafifletme",
          description:
            "Bileşen geçişleri için sistem genelinde kullanılan standart hafifletme işlevlerini sağlayın. Başlangıç olarak, genellikle yaygın bileşen kullanım durumlarını kapsayan standart, hızlandırılmış ve yavaşlatılmış işlevler kullanabilirsiniz.",
        },
        "df-motion-duration": {
          title: "Süre",
          description:
            "Bileşen geçişlerini ürününüzde tutarlı tutmak için birden çok süre değeri tanımlayın.",
        },
        "df-motion-a11y": {
          title: "Erişilebilirlik",
          description:
            "Kullanıcının azaltılmış hareket tercihlerine dikkat edin ve animasyonları daha az belirgin hale getirin veya tamamen kaldırın.",
        },
      },
    },
    "df-iconography": {
      title: "Simgeler",
      description:
        "Simgeler, işlevselliği veya içeriği temsil eden sembollerdir. Anlamı bir bakışta anlaşılabilir ve kullanıcı arayüzlerinde tanınması kolay ve faydalıdır. Dekorasyon için kullanılabilirler, ancak tam potansiyelleri anlamlı ve tutarlı bir şekilde kullanıldığında ortaya çıkar.",
      checklist: {
        "df-iconography-a11y": {
          title: "Erişilebilirlik",
          description:
            "Anlam taşıyan veya işlev gören simgeler için, bu anlamı veya işlevi ifade eden bir varsayılan erişilebilir ad sunun. Ekran okuyucular ve diğer yardımcı teknolojiler, kullanıcıyı arayüz hakkında bilgilendirmek için bu adı kullanabilir. Tamamen dekoratif simgeler için bir ad gerekli değildir. Tasarım sisteminiz ön uç kodu dışa aktarıyorsa, simge adının aria-etiketi kullanılarak dahil edildiğinden emin olun.",
        },
        "df-iconography-style": {
          title: "Stil",
          description:
            "Simgelerinizi bir bütün olarak görsel açıdan mantıklı hale getirin. Çizgili veya dolu bir stil seçmek ve ona sadık kalmak, daha iyi görsel tutarlılık ve tahmin edilebilirlik sağlar.",
        },
        "df-iconography-naming": {
          title: "Adlandırma",
          description:
            "Simgelerinizi görünüşlerine göre değil, iletişimsel amacına dayanarak adlandırın. Örneğin, üçgen bir ortam oynatıcı düğmesi simgesi 'oynat' olarak adlandırılmalıdır, 'üçgen' olarak değil. Keşfedilebilirliği artırmak için ilgili anahtar kelimeler ekleyebilirsiniz.",
        },
        "df-iconography-grid": {
          title: "Izgara İlişkisi",
          description:
            "Simgelerinizi ızgaranızla uyumlu bir sınırlayıcı kutu içinde çizin. Bu, diğer UI öğeleriyle daha iyi eşleşmeleri sağlar. İyi bir örnek, metinlerle eşleştirilen sınırlayıcı kutular içindeki simgelerdir.",
        },
        "df-iconography-keywords": {
          title: "Anahtar Kelimeler",
          description:
            "Her simgeyi keşfedilebilirliği artırmak için anahtar kelimeler eklemek daha iyi bir kullanıcı deneyimi sağlar.",
        },
        "df-iconography-reserved": {
          title: "Ayrılmış Simgeler",
          description:
            "Yaygın işlemleri temsil eden simgeleri ayırmak, bunların başka bir bağlamda kullanılmasını önler. Navigasyon, ekleme ve silme için sistem simgeleri iyi örneklerdir. Bu, daha sezgisel bir kullanıcı deneyimi sağlar.",
        },
        "df-iconography-guidelines": {
          title: "Kılavuzlar",
          description:
            "Simgeleri nasıl ve ne zaman kullanacakları, onlarla çalışırken nelere dikkat edecekleri ve nasıl kullanmayacakları konusunda kılavuzlar sağlayın.",
        },
      },
    },
  },
};
