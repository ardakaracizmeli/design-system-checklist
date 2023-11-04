export default {
  title: "Bakım",
  description:
    "Tasarım sistemleri, takımınızın üstlenebileceği diğer herhangi bir projeyle farklı değildir. Bir tasarım sistemi başarıyla oluşturmak ve sürdürmek için günlük olarak iyi bir şekilde uygulanan net bir stratejiye ve tasarım sistemini birlikte paylaşmaya yardımcı olmak için meslektaşlarınızın geri bildirim vermesine olanak sağlayacak fırsatlar yaratmanız gerekecektir.",

  sections: {
    "m-documentation": {
      title: "Belgeleme",
      description:
        "Belgeleme kaynakları, tasarım sistemlerinin temel bir parçasıdır çünkü takım ve tasarım sistemini kullanan herkes için zaman ve çaba tasarrufu sağlar. İnsanların ipuçlarını öğrenmelerine ve sıkça sorulan sorulara yanıtlar bulmalarına, takım ile iletişime geçmeden önce yardımcı olur.",
      checklist: {
        "m-documentation-principles": {
          title: "Tasarım sistem prensipleri",
          description:
            "Bir tasarım sistemini oluştururken temel prensiplerinizi listelemek, tasarımcıların ve geliştiricilerin değerlerinizi ve takımınızdaki karar verme süreçlerinin temel faktörlerini bilmelerine yardımcı olur.",
        },
        "m-documentation-start": {
          title: "Başlarken",
          description:
            "Takımın tasarım sistemini kurup kullanmaya başlama sürecini diğerleri için rehberlik edin, bu da doğrudan sizinle iletişime geçmeden ilk özelliklerini veya ürünlerini oluşturmalarına yardımcı olabilir.",
        },
        "m-documentation-design": {
          title: "Tasarım en iyi uygulamaları",
          description:
            "Tasarım sistemi kullanarak ürünleri ölçeklendirilebilir bir şekilde tasarlama, yaygın hatalardan kaçınma ve tasarım aracınızı maksimum potansiyele çıkarma ipuçlarını paylaşın.",
        },
        "m-documentation-dev": {
          title: "Geliştirme en iyi uygulamaları",
          description:
            "Tasarım sistemi kullanarak ürünleri geliştirme konusunda ipuçları paylaşın, önerilen teknik bağımlılıklar ve yaygın hatalardan kaçının.",
        },
        "m-documentation-anatomy": {
          title: "Bileşen anatomisi",
          description:
            "Herkesin bileşen düzeninin sınırlamalarını anlamasına yardımcı olmak için bileşenlerin tasarım anatomisine genel bir bakış sunun ve hangi kısımlarının özelleştirilebilir olduğunu belirtin.",
        },
        "m-documentation-props": {
          title: "Bileşen özellikleri",
          description:
            "Bileşenlerinizin tasarım ve kod tarafında desteklediği özellikleri belgeleyin. Daha düzgün bir tasarım devri teslim süreci için çoğunun platformlar arası uyumlu olmasını öneririz.",
        },
        "m-documentation-composition": {
          title: "Bileşen kompozisyon örnekleri",
          description:
            "Daha gelişmiş kompozisyonlar oluşturmak için diğer içerikleri eklemek için yuvalar destekleyen düşük seviye bileşenler oluştururken, bunları nasıl kullanacaklarına dair örnekler sağlayın.",
        },
        "m-documentation-sandbox": {
          title: "Kum havuzu ürün örneği",
          description:
            "Bileşenlerinizi üründe kendiniz test etme yönteminiz yoksa, bileşenlerinizin nasıl davrandığını ve yeni tasarım sistemi özelliklerini çıkarmadan önce vahşi doğada nasıl kullanıldığını denemek için basit bir uygulama oluşturabilirsiniz.",
        },
        "m-documentation-env": {
          title: "Tarayıcı / İşletim sistemi desteği",
          description:
            "Farklı işletim sistemleri ve tarayıcılar için sunduğunuz desteği tanımlayın ve bu konuda ürünle uyumlu olduğunuzdan emin olun.",
        },
        "m-documentation-release": {
          title: "Yayın döngüsü",
          description:
            "Kırılma değişiklikleri içeren önemli sürümler için tahmin edilebilir bir yayın döngüsü oluşturun ve belgeleyin. Bu şekilde, ürün takımları göçleri planlayabilir.",
        },
      },
    },
    "m-local": {
      title: "Yerel kütüphaneler",
      description:
        "Tasarım sisteminin kapsamı genellikle ürün takımlarının hızını artırmak için temel tekrarlanan desenleri oluşturmaktır. Bu, tüm UI öğelerini kendiniz uygulamayacağınız anlamına gelir. Ürün takımları, özel senaryolarını çözmek için tasarım sistemi kullanarak yerel bileşenler oluşturmaya devam edeceklerdir.",
      checklist: {
        "m-local-when": {
          title: "Ne zaman oluşturulmalı",
          description:
            "Ürün takımlarının, tasarım sisteminde yeni bir özellik istemek veya mevcut bir bileşen kullanmak yerine özel bileşenler oluşturması gerektiği konusundaki beklentilerinizi paylaşın.",
        },
        "m-local-types": {
          title: "Yatay ve dikey kütüphaneler",
          description:
            "Çoklu ürünlerde kullanılan yatay kütüphaneler ile yalnızca oluşturan takım tarafından kullanılan dikey kütüphaneler arasındaki farkı açıklayın.",
        },
        "m-local-expectations": {
          title: "Kütüphane beklentileri",
          description:
            "Yerel kütüphane yayınlamak için minimum gereksinimleri belgeleyin. Kütüphane kalitesi, belgeleme ve bakımı için beklentilerinizi açıklayın.",
        },
        "m-local-release": {
          title: "Yayın döngüsü uyumu",
          description:
            "Yerel kütüphanelerin, tasarım sistem yayın döngüsüyle senkronize olduğundan emin olun. Ürünün güncellemelerini engellememek için sistem yeni yayınlanan önemli sürümleri desteklemelidir.",
        },
      },
    },
    "m-process": {
      title: "Takım süreçleri",
      description:
        "Tasarım sistemini başarıyla ölçeklendiren tüm takımlar, paydaşları ve topluluğuyla çalışma süreçleri konusunda sağlam bir süreç belirleyerek bunu başarmıştır. Sistemi geliştirmeye devam ettikçe, size sonsuz saat tasarrufu sağlayacak ve aynı sorulara tekrar tekrar yanıt vermenizi engelleyecektir.",
      checklist: {
        "m-process-log": {
          title: "Karar alma kaydı",
          description:
            "Tekrar tekrar ele almanız gereken konular için nasıl karar verdiğinize dair kayıtlar tutun. Herhangi bir bağlamsal gereksinimi kaçırmayacak ve ek hizalama toplantıları yapmaktan kaçınacaksınız.",
        },
        "m-process-roadmap": {
          title: "Yol haritası",
          description:
            "Uzun vadeli çalışmanızı planlayın ve yalnızca bir kısmını topluluk desteği için ayırın. Bu, yalnızca küçük hata düzeltmeleri ve özellik taleplerine odaklanmak yerine sistemini zaman içinde geliştirmenize yardımcı olur.",
        },
        "m-process-stakeholder": {
          title: "Paydaş haritalama",
          description:
            "Desteklediğiniz tüm ürünlerdeki ana paydaşları listeleyin. Bu, geliştirme ve tasarım çalışanları olabilir, ayrıca ürünü benimsemeye yardımcı olabilecek liderlik kadrosunu da unutmayın.",
        },
        "m-process-analytics": {
          title: "Analitikler",
          description:
            "Sağladığınız kütüphanelerin ve araçların kullanımını ve değerini izlemek için bir yöntem belirleyin. Basit kurulumu yapılabilecek metriklerle başlayabilirsiniz, belgelendirme web siteniz için analitikler, geri bildirim anketleri veya tasarım aracınızdaki bileşen kullanım analitiği gibi.",
        },
        "m-process-shifts": {
          title: 'Sürekli destek "vardiyaları"',
          description:
            "Aynı platform üzerinde birden fazla kişi çalışıyorsa, topluluk desteği için bu işi dağıtın ve planlayın. Böylece, takım üyeleri planlanan işe odaklanabilir ve taleplere ve sorulara dikkat dağıtmaktan kaçınabilir.",
        },
        "m-process-sla": {
          title: "Hizmet Seviyesi Sözleşmesi (SLA)",
          description:
            "Gelen talepleri ve hata raporlarını ele almanızın ne kadar süreceğini belirleyin, böylece ürün takımları sizin yayınınızı beklemeli mi, yoksa geçici bir çözüm mü bulmalı?",
        },
      },
    },
    "m-community": {
      title: "Topluluk desteği",
      description:
        "Tasarım sistemini kullanan ürün tasarımcılarına ve geliştiricilere daha üretken olmalarına, ürünlerde buldukları hataları düzeltmelerine ve ihtiyaçlarını ele almalarına yardımcı olmak önemlidir. Bu geri bildirimi almanın emin bir yolunu oluşturmak amacınızdır.",
      checklist: {
        "m-community-channels": {
          title: "Destek kanalları",
          description:
            "İletişimde kullandığınız araçlarda destek kanalları oluşturun. Onları platforma göre ayırmak, sorunlarının platforma özgü ayrıntılarını paylaşmalarını kolaylaştırır.",
        },
        "m-community-template": {
          title: "Şablonlar",
          description:
            "Özellik talepleri ve hata raporları oluşturmak için şablonlar hazırlayın. Bu şablonları kullanarak, karar vermek için ihtiyaç duyduğunuz çoğu bağlamsal bilgiyi talep edebilirsiniz, böylece bu bilgileri manuel olarak aramak zorunda kalmazsınız.",
        },
        "m-community-updates": {
          title: "Düzenli güncellemeler",
          description:
            "Yalnızca uygulamaya odaklanırsanız, yeni özelliklerin benimsenme riski altında olursunuz. Güncellemeleriniz için bir düzen belirleyerek, ürün takımlarının sisteminizde nelerin yeni olduğunu ve onu nasıl kullanabileceklerini öğrenmelerine yardımcı olursunuz.",
        },
        "m-community-slots": {
          title: "Açık saatler",
          description:
            "Bir bilet veya sohbetle çözülemeyecek sorular olacak. Diğer takımların sizi danışmak veya özellik uygulamalarını tartışmak için birkaç randevu takvim yuvası tutun.",
        },
      },
    },
    "m-contribution": {
      title: "Katkı",
      description:
        "Tasarım sistemleri, bir ekip oyunudur. Ürün takımlarını yolculuğa dahil etmeye, sisteme katkıda bulunmalarına ve şirket içinde savunmalarına yardımcı olmayı unutmayın.",
      checklist: {
        "m-contribution-rules": {
          title: "Sistem için kurallar",
          description:
            "Ürün takımlarına, nasıl tasarım ve geliştirme sürecinin çalıştığını açıklayın. Tasarım sistem takımları genellikle tüm ürünü etkileyen ölçeklenebilir kararlar verme sorumluluğu olduğu için ürün takımlarından daha yavaş hareket eder.",
        },
        "m-contribution-guidelines": {
          title: "Katkı kuralları",
          description:
            "Katkıda bulunanların, yeni özellikler eklemek ve test etmek için tasarım ve geliştirme ortamını hazırlamaları gerekenleri açıklayın.",
        },
        "m-contribution-template": {
          title: "Özellik teklifi şablonu",
          description:
            "Yeni bir özellik üzerinde çalışmaya başlamak için standart bir şablon hazırlayın. Bu şablon, önerilen değişikliklerin tüm platformlara uygulanacağından ve mevcut bileşen kullanımını bozmayacağından emin olacaktır.",
        },
        "m-contribution-engagement": {
          title: "Katılım",
          description:
            "Yeni özelliklerle ilgili duyurular yaparken ve katkıda bulunanların çalışmalarını öne çıkarırken onların işlerini vurgulayın ve katkıda bulunmaları için yöneticilerinden destek almalarına yardımcı olun.",
        },
      },
    },
  },
};
