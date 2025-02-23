import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'

i18n.use(LanguageDetector).use(initReactI18next).init({
  debug:true,
  fallbackLng: "en",
  resources:{
    en: {
      translation: {
        header: {
          header1: "For Buyer",
          header2: "For Seller",
          header3: "For Seller",
          header4: "Genral Information",
          header5: "Registration",
          header6: "Categories",
          header7: "Add offers",
          header8: "Wholesaler's data",
          header9: "View Details",
          header10: "Related Search",
          header11: "For one-year REGISTRATION and RENEWAL",
          header12: "promotions cannot be combined",
          header13: "Number of remaining packages",
          header14: "Register",
          header15: "FLash Sale",
        },
        topbar: {
          top1: "The best stocklot offers from 150 countries",
          top2: "More than 100,000 satisfied users",
          top3: "Offers cheaper by up to 90%",
          top4: "Direct contact to resellers and wholesalers",
        },
        heading: {
          heading1: "Popular searches",
        },
        tags: {
          tags1: "Week's best offers",
          tags2: "Most popular offers",
          tags3: "Recently Added",
          tags4: "Bankrupt stocks",
          tags5: "Get the best deals on our bankrupt stocks",
          tags6: "Recently Added",
          tags7: "Lot24 in the World",
          tags8: "Free Lot24 NEWSLETTER",
          tags12: "Daily updates about new products and news about Lot24.",
          tags9: "By subscribing to our newsletter, you consent to the processing of your personal data for marketing purposes.",
          tags10: "An international wholesale trading platform for overstocks, clearance stocks, company liquidation stocks, bankrupt stocks, and customer returns.",
          tags11: "Lot24 Ltd Unit 4E, Enterprise Court, S63 5DB Rotherham, United Kingdom, VAT Number: GB 254632212, Company number: 09582404 © 2008 - 2024 Lot24. All rights reserved.",
        },
        view:{
          view1: "View More",
        },
        register:{
          register1: "Phone",
          register2: "Message",
          register3: "Standard",
          register4: "Premium",
          register5: "Your data is encrypted. You register safely",
          register6: "99.9% satisfied sellers",
          register7: "Our customers confidently buy from all over the world",
          register8: "Access period",
          register9: "Unlimited number of inquiries to send",
          register10: "Daily newsletter with latest offers",
          register11: "Access to special offers up to 50%",
          register12: "Extensive database of shopping wholesalers",
          register13: "Frequently Asked Questions",
          register14: "Choose the payment method",
          register15: "PAYMENT",
          register16: "Seller Login",
          register17: "Contact Us",
          register18: "Customer Service",
          register19: "Direct communication",
          register20: "Company information",
          register21: "I hereby consent to the processing of my personal data in accordance with the Act on the protection of personal data in connection with the execution of the application.",
        } ,
        faq:{
          faq1:"How can a seller open an account?",
          faq2:"Sellers can open an account by clicking on the 'Register' button at the top right of the page, then selecting the 'Seller' option during the registration process.",
          faq3:"How do I purchase products as a buyer?",
          faq4:"As a buyer, you can browse products and add items to your cart. Once ready, proceed to checkout and follow the payment instructions.",
          faq5:"What are the fees for sellers?",
          faq6:"The platform charges a small fee on each successful sale. There are no monthly subscription fees, and you only pay when you make a sale.",
          faq7:"Can buyers return products if they are unsatisfied?",
          faq8:"Yes, buyers can initiate returns if the product does not meet their expectations. Review our return policy for details.",
          faq9:"How do sellers get paid?",
          faq10:"Sellers receive payments through their preferred payment method after each successful transaction.",
        }

      },
    },
    de: {
      translation: {
        header: {
          header1: "Für Käufer",
          header2: "Für Verkäufer",
          header3: "Für Verkäufer",
          header6: "Kategorien",
          header7: "Angebote hinzufügen",
          header8: "Großhändlerinformationen",
          header9: "Details anzeigen",
          header10: "Verwandte Suche",
        },
        topbar: {
          top1: "Die besten Stocklot-Angebote aus 150 Ländern",
          top2: "Mehr als 100.000 zufriedene Nutzer",
          top3: "Angebote bis zu 90% günstiger",
          top4: "Direkter Kontakt zu Wiederverkäufern und Großhändlern",
        },
        heading: {
          heading1: "Beliebte Suchanfragen",
        },
        tags: {
          tags1: "Die besten Angebote der Woche",
          tags2: "Beliebteste Angebote",
          tags3: "Kürzlich hinzugefügt",
          tags4: "Insolvenzbestände",
          tags5: "Sichern Sie sich die besten Deals für unsere Insolvenzbestände",
          tags6: "Kürzlich hinzugefügt",
          tags7: "Lot24 in der Welt",
          tags8: "Kostenloser Lot24-Newsletter",
          tags12: "Tägliche Updates zu neuen Produkten und Nachrichten über Lot24",
          tags9: "Durch das Abonnieren unseres Newsletters stimmen Sie der Verarbeitung Ihrer personenbezogenen Daten zu Marketingzwecken zu.",
          tags10: "Eine internationale Großhandelsplattform für Überbestände, Räumungsbestände, Unternehmensliquidationen, Insolvenzbestände und Kundenrückgaben.",
          tags11: "Lot24 Ltd Unit 4E, Enterprise Court, S63 5DB Rotherham, Vereinigtes Königreich, USt-IdNr.: GB 254632212, Firmenummer: 09582404 © 2008 - 2024 Lot24. Alle Rechte vorbehalten.",
        },
        view:{
          view1: "Mehr anzeigen",
        },
        register: {
          register1: "Telefon",
          register2: "Nachricht",
          register3: "Standard",
          register4: "Premium",
          register5: "Ihre Daten sind verschlüsselt. Sie registrieren sich sicher",
          register6: "99,9% zufriedene Verkäufer",
          register7: "Unsere Kunden kaufen mit Vertrauen aus der ganzen Welt",
          register8: "Zugriffszeitraum",
          register9: "Unbegrenzte Anzahl an Anfragen zu senden",
          register10: "Täglicher Newsletter mit den neuesten Angeboten",
          register11: "Zugang zu Sonderangeboten bis zu 50%",
          register12: "Umfangreiche Datenbank von Einkaufs-Großhändlern",
          register13: "Häufig gestellte Fragen",
          register14: "Wählen Sie die Zahlungsmethode",
          register15: "BEZAHLUNG",
  register16: "Verkäufer Login",
  register17: "Kontaktieren Sie uns",
  register18: "Kundendienst",
  register19: "Direkte Kommunikation",
  register20: "Unternehmensinformationen",
  register21: "Hiermit gebe ich meine Zustimmung zur Verarbeitung meiner persönlichen Daten gemäß dem Gesetz zum Schutz personenbezogener Daten im Zusammenhang mit der Ausführung der Anwendung."

        },
        faq: {
          faq1: "Wie kann ein Verkäufer ein Konto eröffnen?",
          faq2: "Verkäufer können ein Konto eröffnen, indem sie auf die Schaltfläche 'Registrieren' oben rechts auf der Seite klicken und während des Registrierungsvorgangs die Option 'Verkäufer' auswählen.",
          faq3: "Wie kaufe ich Produkte als Käufer?",
          faq4: "Als Käufer können Sie Produkte durchsuchen und Artikel in Ihren Warenkorb legen. Sobald Sie bereit sind, gehen Sie zur Kasse und folgen Sie den Zahlungsanweisungen.",
          faq5: "Welche Gebühren fallen für Verkäufer an?",
          faq6: "Die Plattform erhebt eine geringe Gebühr für jeden erfolgreichen Verkauf. Es gibt keine monatlichen Abonnementgebühren, und Sie zahlen nur, wenn Sie einen Verkauf tätigen.",
          faq7: "Können Käufer Produkte zurückgeben, wenn sie nicht zufrieden sind?",
          faq8: "Ja, Käufer können eine Rückgabe initiieren, wenn das Produkt nicht ihren Erwartungen entspricht. Überprüfen Sie unsere Rückgabebedingungen für weitere Details.",
          faq9: "Wie werden Verkäufer bezahlt?",
          faq10: "Verkäufer erhalten Zahlungen über ihre bevorzugte Zahlungsmethode nach jedem erfolgreichen Geschäft."
        }
        
        
      },
    },
    es: {
        translation: {
          header: {
            header1: "Para compradores",
            header2: "Para vendedores",
            header3: "Para vendedores",
            header6: "Categorías",
            header7: "Agregar ofertas",
            header8: "Datos del mayorista",
            header9: "Ver detalles",
            header10: "Búsqueda relacionada",
          },
          topbar: {
            top1: "Las mejores ofertas de lotes de 150 países",
            top2: "Más de 100,000 usuarios satisfechos",
            top3: "Ofertas hasta un 90% más baratas",
            top4: "Contacto directo con revendedores y mayoristas",
          },
          heading: {
            heading1: "Búsquedas populares",
          },
          tags: {
            tags1: "Las mejores ofertas de la semana",
            tags2: "Las ofertas más populares",
            tags3: "Recientemente añadido",
            tags4: "Stocks de quiebra",
            tags5: "Consigue las mejores ofertas de nuestros stocks de quiebra",
            tags6: "Recientemente añadido",
            tags7: "Lot24 en el mundo",
            tags8: "Boletín gratuito de Lot24",
            tags12: "Actualizaciones diarias sobre nuevos productos y noticias sobre Lot24",
            tags9: "Al suscribirte a nuestro boletín, aceptas el procesamiento de tus datos personales con fines de marketing.",
            tags10: "Una plataforma internacional de comercio mayorista para excedentes, stocks de liquidación, liquidaciones empresariales, stocks de quiebra y devoluciones de clientes.",
            tags11: "Lot24 Ltd Unit 4E, Enterprise Court, S63 5DB Rotherham, Reino Unido, Número de IVA: GB 254632212, Número de empresa: 09582404 © 2008 - 2024 Lot24. Todos los derechos reservados.",
          },
          view:{
            view1: "Ver más",
          },
          register: {
            register1: "Teléfono",
            register2: "Mensaje",
            register3: "Estándar",
            register4: "Premium",
            register5: "Tus datos están cifrados. Te registras de forma segura",
            register6: "Vendedores con un 99.9% de satisfacción",
            register7: "Nuestros clientes compran con confianza desde todo el mundo",
            register8: "Periodo de acceso",
            register9: "Número ilimitado de consultas para enviar",
            register10: "Boletín diario con las últimas ofertas",
            register11: "Acceso a ofertas especiales hasta un 50%",
            register12: "Base de datos extensa de mayoristas de compras",
            register13: "Preguntas frecuentes",
            register14: "Elija el método de pago",
          register15: "PAGO",
          register16: "Inicio de sesión del vendedor",
          register17: "Contáctenos",
          register18: "Atención al cliente",
          register19: "Comunicación directa",
          register20: "Información de la empresa",
          register21: "Por la presente consiento el procesamiento de mis datos personales de acuerdo con la Ley de protección de datos personales en relación con la ejecución de la solicitud."
          },
          faq: {
            faq1: "¿Cómo puede un vendedor abrir una cuenta?",
            faq2: "Los vendedores pueden abrir una cuenta haciendo clic en el botón 'Registrarse' en la parte superior derecha de la página y luego seleccionando la opción 'Vendedor' durante el proceso de registro.",
            faq3: "¿Cómo compro productos como comprador?",
            faq4: "Como comprador, puedes explorar productos y añadir artículos a tu carrito. Una vez listo, procede al pago y sigue las instrucciones de pago.",
            faq5: "¿Cuáles son las tarifas para los vendedores?",
            faq6: "La plataforma cobra una pequeña tarifa por cada venta exitosa. No hay tarifas mensuales de suscripción, y solo pagas cuando realizas una venta.",
            faq7: "¿Pueden los compradores devolver productos si no están satisfechos?",
            faq8: "Sí, los compradores pueden iniciar una devolución si el producto no cumple con sus expectativas. Revisa nuestra política de devoluciones para más detalles.",
            faq9: "¿Cómo reciben los vendedores el pago?",
            faq10: "Los vendedores reciben los pagos a través de su método de pago preferido después de cada transacción exitosa."
          }
          
          
        },
      },
      cn: {
        translation: {
          header: {
            header1: "买家专区",
            header2: "卖家专区",
            header3: "卖家专区",
            header6: "类别",
            header7: "添加优惠",
            header8: "批发商数据",
            header9: "查看详情",
            header10: "相关搜索",
          },
          topbar: {
            top1: "来自150个国家的最佳批次报价",
            top2: "超过100,000名满意用户",
            top3: "优惠最多可低至90%",
            top4: "直接与转售商和批发商联系",
          },
          heading: {
            heading1: "热门搜索",
          },
          tags: {
            tags1: "本周最佳优惠",
            tags2: "最受欢迎的优惠",
            tags3: "最近添加",
            tags4: "破产库存",
            tags5: "获取我们破产库存的最佳优惠",
            tags6: "最近添加",
            tags7: "Lot24 在全球",
            tags8: "Lot24 免费新闻通讯",
            tags12: "提供关于新产品和Lot24的每日更新",
            tags9: "通过订阅我们的新闻通讯，您同意将您的个人数据用于营销目的。",
            tags10: "一个国际批发平台，专注于过剩库存、清仓库存、企业清算、破产库存和客户退货。",
            tags11: "Lot24有限公司，Unit 4E，Enterprise Court，S63 5DB Rotherham，英国，增值税号：GB 254632212，注册公司号：09582404 © 2008 - 2024 Lot24。保留所有权利。",
          },
          view:{
            view1: "查看更多 (Xià kàn gèng duō)",
          },
          register: {
            register1: "电话",
            register2: "消息",
            register3: "标准",
            register4: "高级",
            register5: "您的数据已加密。您可以安全注册",
            register6: "99.9% 满意的卖家",
            register7: "我们的客户从世界各地自信地购买",
            register8: "访问期限",
            register9: "无限次查询发送",
            register10: "每日新闻通讯，包含最新优惠",
            register11: "最多享受50%的特别优惠",
            register12: "广泛的购物批发商数据库",
            register13: "常见问题",
            register14: "付款",
          register15: "	选择支付方式",
          register16: "卖方登录",
  register17: "联系我们",
  register18: "客户服务",
  register19: "直接沟通",
  register20: "公司信息",
  register21: "我特此同意根据个人数据保护法处理我的个人数据，以便执行该申请。"
          }
          
        },
      },
      tr: {
        translation: {
          header: {
            header1: "Alıcılar Bölgesi",
            header2: "Satıcılar Bölgesi",
            header3: "Satıcılar Bölgesi",
            header6: "Kategoriler",
            header7: "Teklif Ekle",
            header8: "Toptancı verileri",
            header9: "Ayrıntıları görüntüle",
            header10: "İlgili Arama",
          },
          topbar: {
            top1: "150 ülkeden gelen en iyi parti teklifleri",
            top2: "100.000'den fazla memnun kullanıcı",
            top3: "Teklifler %90'a kadar daha ucuz",
            top4: "Perakendeciler ve toptancılarla doğrudan iletişim",
          },
          heading: {
            heading1: "Popüler Aramalar",
          },
          tags: {
            tags1: "Bu Haftanın En İyi Teklifleri",
            tags2: "En Popüler Teklifler",
            tags3: "Yeni Eklenenler",
            tags4: "İflas Stokları",
            tags5: "İflas stoklarımızdan en iyi teklifleri alın",
            tags6: "Yeni Eklenenler",
            tags7: "Lot24 Dünyada",
            tags8: "Lot24 Ücretsiz Bülteni, ",
            tags12: "yeni ürünler ve Lot24 hakkında günlük güncellemeler sunar",
            tags9: "Bültenimize abone olarak, kişisel verilerinizin pazarlama amacıyla işlenmesini kabul etmiş oluyorsunuz.",
            tags10: "Artan stoklar, temizlik envanteri, işyeri likidasyonları, iflas stokları ve müşteri iadeleri için uluslararası toptan satış platformu.",
            tags11: "Lot24 Ltd, Unit 4E, Enterprise Court, S63 5DB Rotherham, Birleşik Krallık, KDV Numarası: GB 254632212, Şirket Numarası: 09582404 © 2008 - 2024 Lot24. Tüm hakları saklıdır.",
          },
          view:{
            view1: "Daha fazla gör",
          },
          register: {
            register1: "Telefon",
            register2: "Mesaj",
            register3: "Standart",
            register4: "Premium",
            register5: "Verileriniz şifrelenmiştir. Güvenli şekilde kayıt oluyorsunuz",
            register6: "%99,9 memnun satıcılar",
            register7: "Müşterilerimiz, dünyanın her yerinden güvenle alışveriş yapıyor",
            register8: "Erişim süresi",
            register9: "Gönderilecek sınırsız sayıda sorgu",
            register10: "Günlük bültenle en son teklifler",
            register11: "Özel tekliflere %50'ye kadar erişim",
            register12: "Geniş veritabanı alışveriş toptancıları",
            register13: "Sıkça Sorulan Sorular",
            register14: "Ödeme yöntemini seçin",
          register15: "ÖDEME",
          register16: "Satıcı Girişi",
          register17: "Bize Ulaşın",
          register18: "Müşteri Hizmetleri",
          register19: "Doğrudan iletişim",
          register20: "Şirket bilgileri",
          register21: "Bu belge ile, başvurunun yürütülmesiyle ilgili olarak kişisel verilerimin işlenmesine ilişkin olarak kişisel verilerin korunmasına dair kanun çerçevesinde onay veriyorum."
          },
          faq: {
            faq1: "卖家如何开设账户？",
            faq2: "卖家可以通过点击页面右上角的“注册”按钮，然后在注册过程中选择“卖家”选项来开设账户。",
            faq3: "作为买家如何购买产品？",
            faq4: "作为买家，您可以浏览产品并将商品添加到购物车。准备好后，继续结账并按照支付指示操作。",
            faq5: "卖家需要支付哪些费用？",
            faq6: "平台对每笔成功交易收取少量费用。没有月度订阅费用，只有在成功销售后才需要支付费用。",
            faq7: "如果买家不满意，可以退货吗？",
            faq8: "是的，如果产品不符合买家的预期，买家可以申请退货。请查看我们的退货政策了解详细信息。",
            faq9: "卖家如何收到付款？",
            faq10: "卖家在每次成功交易后，通过他们偏好的支付方式收到付款。"
          }
          
          
        },
      },
      sa: {
        translation: {
          header: {
            header1: "منطقة المشترين",
            header2: "منطقة البائعين",
            header3: "منطقة البائعين",
            header6: "الفئات",
            header7: "إضافة عروض",
            header8: "بحث ذو صلة",
            header9: "عرض التفاصيل",
            header10: "بحث ذو صلة",
          },
          topbar: {
            top1: "أفضل عروض الحِصص من 150 دولة",
            top2: "أكثر من 100,000 مستخدم راضٍ",
            top3: "عروض تصل إلى 90% أرخص",
            top4: "التواصل المباشر مع بائعي التجزئة وتجار الجملة",
          },
          heading: {
            heading1: "البحث الشائع",
          },
          tags: {
            tags1: "أفضل العروض لهذا الأسبوع",
            tags2: "أشهر العروض",
            tags3: "أضيف مؤخرًا",
            tags4: "مخزون الإعسار",
            tags5: "احصل على أفضل العروض من مخزون الإعسار لدينا",
            tags6: "أضيف مؤخرًا",
            tags7: "Lot24 في العالم",
            tags8: "النشرة الإخبارية المجانية من Lot24",
            tags12: "تحديثات يومية حول المنتجات الجديدة وأخبار Lot24",
            tags9: "بالاشتراك في نشرتنا الإخبارية، أنت توافق على معالجة بياناتك الشخصية لأغراض التسويق.",
            tags10: "منصة تجارة جملة دولية للفائض من المخزون، مخزون التصفية، التصفية التجارية، مخزون الإعسار، ومرتجعات العملاء.",
            tags11: "Lot24 Ltd، الوحدة 4E، Enterprise Court، S63 5DB Rotherham، المملكة المتحدة، رقم ضريبة القيمة المضافة: GB 254632212، رقم الشركة: 09582404 © 2008 - 2024 Lot24. جميع الحقوق محفوظة.",
          },
          view:{
            view1: "عرض المزيد",
          },
          register: {
            register1: "الهاتف",
            register2: "الرسالة",
            register3: "القياسي",
            register4: "مميز",
            register5: "بياناتك مشفرة. أنت تسجل بأمان",
            register6: "بائعون راضون بنسبة 99.9%",
            register7: "عملاؤنا يشترون بثقة من جميع أنحاء العالم",
            register8: "فترة الوصول",
            register9: "عدد غير محدود من الاستفسارات للإرسال",
            register10: "النشرة اليومية مع آخر العروض",
            register11: "الوصول إلى العروض الخاصة حتى 50%",
            register12: "قاعدة بيانات واسعة لتجار الجملة في التسوق",
            register13: "الأسئلة الشائعة",
            register14: "اختر طريقة الدفع",
          register15: "الدفع",
          register16: "تسجيل دخول البائع",
  register17: "اتصل بنا",
  register18: "خدمة العملاء",
  register19: "التواصل المباشر",
  register20: "معلومات الشركة",
  register21: "أوافق بموجب هذا على معالجة بياناتي الشخصية وفقًا لقانون حماية البيانات الشخصية فيما يتعلق بتنفيذ الطلب."
          },
          faq: {
            faq1: "كيف يمكن للبائع فتح حساب؟",
            faq2: "يمكن للبائعين فتح حساب من خلال النقر على زر 'التسجيل' في أعلى الصفحة على اليمين، ثم اختيار خيار 'بائع' أثناء عملية التسجيل.",
            faq3: "كيف يمكنني شراء المنتجات كمشتري؟",
            faq4: "كمشتري، يمكنك تصفح المنتجات وإضافة العناصر إلى سلة التسوق. عند الانتهاء، قم بإتمام عملية الدفع واتبع تعليمات الدفع.",
            faq5: "ما هي الرسوم التي يدفعها البائعون؟",
            faq6: "تقوم المنصة بفرض رسوم صغيرة على كل عملية بيع ناجحة. لا توجد رسوم اشتراك شهرية، وتدفع فقط عند إتمام عملية البيع.",
            faq7: "هل يمكن للمشترين إرجاع المنتجات إذا لم يكونوا راضين؟",
            faq8: "نعم، يمكن للمشترين بدء عملية الإرجاع إذا لم يكن المنتج كما توقعوا. راجع سياسة الإرجاع لدينا لمزيد من التفاصيل.",
            faq9: "كيف يتقاضى البائعون المدفوعات؟",
            faq10: "يتلقى البائعون المدفوعات من خلال طريقة الدفع المفضلة لديهم بعد كل عملية بيع ناجحة."
          }
,


          
        },
      }
  }
})

export default i18n;


export const changeLanguage = (lang) => {
  const availableLanguages = ['uk', 'de', 'es', 'cn', 'tr', 'sa']; // Define available language codes
  if (availableLanguages.includes(lang)) {
    i18n.changeLanguage(lang);
  } else {
    console.warn(`Language code ${lang} is not available. Falling back to default language.`);
    i18n.changeLanguage('uk'); // Fallback to default language
  }
};