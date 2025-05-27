// menu-config.js

const menuConfigData = {
  hotelName_en: "Marriott Aden Hotel", // أو اسم مطعمك بالإنجليزية
  hotelName_ar: "فندق ماريوت عدن",   // أو اسم مطعمك بالعربية
  
  // نصوص شاشة الترحيب (Hero Section)
  heroMainTitle_ar: "اجعل وجبتك اليوم ذكرى لا تُنسى.", // النص الكبير الرئيسي
  heroSubtitle_ar: "طعم يشدك", // النص الأصغر أو الشعار
  heroButtonText_ar: "اكتشف قائمتنا", // نص الزر

  hotelLogo: "images/hotel_logo.png", // تأكد أن هذا شعارك
   heroSliderImages: [
    "images/mar.jpg", // صورة الفندق من الخارج (التي أرفقتها)
    "images/m.jpg", // صورة من داخل المطعم 1
    /* "images/hero/dish_highlight_1.jpg", // صورة لطبق مميز 1
    "images/hero/restaurant_interior_2.jpg", // صورة أخرى من داخل المطعم
    "images/hero/dish_highlight_2.jpg */  // صورة لطبق مميز آخر
    // يمكنك إضافة المزيد من الصور هنا
  ], // استخدم صورة مبنى الفندق أو صورة أخرى عالية الجودة

  currency_en: "YER",
  currency_ar: "ريال",
  roomServiceNote_en: "marriott 2025",
  roomServiceNote_ar: "جميع الحقوق محفوظة فندق ماريوت 2025",
  categories: [
    {
      id: "soups",
      name_en: "Soups",
      name_ar: "الشوربة",
      mainImage: "images/soups_collage.jpg", // صورة رئيسية للقسم
      items: [
        { // لا توجد صورة للصنف هنا، أو سيتم تجاهلها
          name_en: "Lentil Soup",
          name_ar: "شوربة عدس",
          price: 2000,
          description_ar: "شوربة العدس التقليدية متبلة بالبهارات الشرقية."
        },
        {
          name_en: "Fresh Vegetable Soup",
          name_ar: "شوربة الخضروات الطازجة",
          price: 2000,
          description_ar: "خضار طازجة مقطعة."
        },
        {
          name_en: "Chicken Soup (Yemeni Style)",
          name_ar: "شوربة الدجاج (بالطريقة اليمنية)",
          price: 4000,
          description_ar: "شوربة الدجاج المقلية مع الخضروات الطازجة على الطريقة اليمنية والبهارات."
        },
        {
          name_en: "Soup of the Day",
          name_ar: "شوربة اليوم",
          price: "X",
          description_ar: "اسأل النادل عن شوربة اليوم المميزة."
        }
      ]
    },
    {
      id: "appetizers_salads",
      name_en: "Appetizers & Salads",
      name_ar: "السلطات والمقبلات",
      mainImage: "images/appetizers_background.jpg",
      items: [
        {
          name_en: "Green Salad",
          name_ar: "سلطة خضراء",
          price: 2500,
          description_ar: "خضار طازجة مقطعة ومتبلة مع زيت الزيتون والليمون."
        },
        {
          name_en: "Mixed Cheese Platter",
          name_ar: "طبق أجبان مشكلة",
          price: 6000,
          description_ar: "تشكيلة متنوعة من الأجبان الفاخرة."
        },
        {
          name_en: "Tuna Fish Salad",
          name_ar: "سلطة سمك التونة",
          price: 5500,
          description_ar: "سلطة مع الطماطم والخيار والبصل وصوص الليمون."
        },
        {
          name_en: "Greek Salad",
          name_ar: "سلطة يونانية",
          price: 2500,
          description_ar: "خيار، طماطم، زيتون، جبنة فيتا بصلصة الليمون والزعتر."
        },
        {
          name_en: "Marriott's Famous Salad (Chef's Choice)",
          name_ar: "سلطة ماريوت الشهيرة (من اختيار الشيف)",
          price: 8000,
          description_ar: "مزيج فريد من المكونات الطازجة من اختيار الشيف."
        },
        {
          name_en: "Sahawq Plain",
          name_ar: "سحاوق عادي",
          price: 1000,
          description_ar: "صلصة السحاوق اليمنية التقليدية."
        },
        {
          name_en: "Sahawq with Cheese",
          name_ar: "سحاوق جبن",
          price: 3000,
          description_ar: "صلصة السحاوق مع إضافة الجبن الكريمي."
        }
      ]
    },
    // ... (أكمل بقية الأقسام بنفس الطريقة: احتفظ بـ mainImage للقسم، وأزل أو تجاهل image من الأصناف)
    // ... سأقوم بتعديل قسم واحد آخر كمثال
    {
      id: "main_course_grill",
      name_en: "Main Course - From the Grill",
      name_ar: "الطبق الرئيسي - المشاوي",
      mainImage: "images/grill_background.jpg",
      items: [
        { name_en: "Mixed Grill", name_ar: "مشاوي مشكلة", price: 15000, description_ar: "تشكيلة من كباب اللحم، شيش طاووق، وكفتة الدجاج." },
        { name_en: "Shish Taouk", name_ar: "شيش طاووق", price: 7000, description_ar: "قطع دجاج متبلة ومشوية على الفحم." },
        { name_en: "Chicken Kofta", name_ar: "كفتة دجاج", price: 8000, description_ar: "أصابع كفتة الدجاج المتبلة والمشوية." },
        { name_en: "Meat Kofta", name_ar: "كفتة لحم", price: 12000, description_ar: "أصابع كفتة اللحم الشهية والمشوية." },
        { name_en: "Broasted Chicken (Half)", name_ar: "دجاج بروست (نصف)", price: 5000, description_ar: "نصف دجاجة بروست مقرمشة مع البطاطس." },
        { name_en: "Broasted Chicken (Full)", name_ar: "دجاج بروست (كامل)", price: 10000, description_ar: "دجاجة كاملة بروست مقرمشة مع البطاطس." },
        { name_en: "Grilled Chicken (Half)", name_ar: "دجاج مشوي (نصف دجاجة)", price: 8500, description_ar: "نصف دجاجة مشوية على الفحم بتتبيلة خاصة." },
        { name_en: "Grilled Shrimp", name_ar: "جمبري مشوي", price: 15000, description_ar: "جمبري طازج متبل ومشوي." },
        { name_en: "Grilled Fish Fillet", name_ar: "سمك مشوي فيليه", price: 12000, description_ar: "فيليه سمك طازج مشوي." }
      ]
    },
    // ... أكمل باقي الأقسام بنفس النمط
  ]
};
// يرجى استكمال بقية الأقسام بنفس الطريقة (إزالة حقل image من كل item إذا أردت، أو ببساطة تجاهله في script.js)