// menu-config.js

const menuConfigData = {
  hotelName_en: "Marriott Aden Hotel",
  hotelName_ar: "فندق ماريوت عدن",
  hotelBackgroundImage: "images/mar.jpg", // استبدل هذا بمسار صورتك
  currency_en: "YER",
  currency_ar: "ريال",
  roomServiceNote_en: "Add 10% Room Service",
  roomServiceNote_ar: "إضافة 10% خدمة الغرف",
  categories: [
    {
      id: "soups",
      name_en: "Soups",
      name_ar: "الشوربة",
      backgroundImage: "images/soups_collage.jpg", // استبدل هذا بمسار صورتك
      items: [
        {
          name_en: "Lentil Soup",
          name_ar: "شوربة عدس",
          description_en: "Traditional lentil soup seasoned with oriental spices.",
          description_ar: "شوربة العدس التقليدية متبلة بالبهارات الشرقية.",
          price: 2000,
        },
        {
          name_en: "Fresh Vegetable Soup",
          name_ar: "شوربة الخضروات الطازجة",
          description_en: "Diced fresh vegetables.",
          description_ar: "خضار طازجة مقطعة.",
          price: 2000,
        },
        {
          name_en: "Chicken Soup (Yemeni Style)",
          name_ar: "شوربة الدجاج (بالطريقة اليمنية)",
          description_en: "Boiled chicken with fresh vegetables and spices.",
          description_ar: "شوربة الدجاج المقلية مع الخضروات الطازجة على الطريقة اليمنية والبهارات.",
          price: 4000,
        }
      ]
    },
    {
      id: "appetizers",
      name_en: "Appetizers & Salads",
      name_ar: "السلطات والمقبلات",
      backgroundImage: "images/appetizers_background.jpg", // استبدل هذا بمسار صورتك
      items: [
        {
          name_en: "Mix Green Salad",
          name_ar: "سلطة خضراء",
          description_en: "Assorted cut fresh vegetables marinated with olive oil and lemon dressing.",
          description_ar: "خضار طازجة مقطعة ومتبلة مع زيت الزيتون والليمون.",
          price: 2500,
        },
        {
          name_en: "Tuna Fish Salad",
          name_ar: "سلطة سمك التونة",
          description_en: "Lettuce, onion, tomato, cucumber, and oil lemon sauce.",
          description_ar: "سلطة مع الطماطم والخيار والبصل وصوص الليمون.",
          price: 5500,
        }
        // ... يمكنك إضافة المزيد من المقبلات هنا بنفس الطريقة
      ]
    },
    {
      id: "main_courses_grill",
      name_en: "Main Courses - Grill",
      name_ar: "الأطباق الرئيسية - المشاوي",
      backgroundImage: "images/grill_background.jpg", // استبدل هذا بمسار صورتك
      items: [
        {
          name_en: "Mixed Grill Platter",
          name_ar: "مشاوي مشكلة",
          description_en: "Assorted skewer of kebab, kofta, shish taouk.",
          description_ar: "طبق شيش كباب، كفتة، شيش طاووق، يقدم مع البطاطس المقلية.",
          price: 15000,
        },
        {
          name_en: "Shish Taouk",
          name_ar: "شيش طاووق",
          description_en: "Chicken cubes marinated in garlic, lemon and chili.",
          description_ar: "قطع دجاج متبلة بصلصة الثوم، الليمون والخل. يقدم مع البطاطس المقلية.",
          price: 7000,
        }
        // ... يمكنك إضافة المزيد من المشاوي هنا بنفس الطريقة
      ]
    },
    {
      id: "yemeni_cuisine",
      name_en: "Yemeni Cuisine",
      name_ar: "المطبخ اليمني",
      backgroundImage: "images/yemeni_background.jpg", // استبدل هذا بمسار صورتك
      items: [
        {
          name_en: "Fresh Lamb Liver",
          name_ar: "كبدة غنم بلدي",
          description_en: "Fresh lamb liver cooked with onions, tomato, chili with Yemeni spices, served with bread.",
          description_ar: "كبدة غنم طازجة مطهية مع البصل والطماطم والفلفل الأحمر والتوابل اليمنية. تقدم مع الخبز.",
          price: 7000,
        },
        {
          name_en: "Chicken Curry",
          name_ar: "دجاج بالكاري",
          description_en: "Chicken cubes marinated with special Indian spices served with white rice.",
          description_ar: "قطع دجاج متبلة ومطهية بالتوابل الهندية. تقدم مع الأرز الأبيض.",
          price: 5500,
        }
        // ... يمكنك إضافة المزيد من الأطباق اليمنية هنا
      ]
    },
    {
      id: "beverages",
      name_en: "Beverages",
      name_ar: "المشروبات",
      backgroundImage: "images/beverages_background.jpg", // استبدل هذا بمسار صورتك
      items: [
        {
          name_en: "Fresh Orange Juice",
          name_ar: "عصير برتقال طازج",
          description_en: "",
          description_ar: "",
          price: 3000,
        },
        {
          name_en: "Tea",
          name_ar: "شاي",
          description_en: "",
          description_ar: "",
          price: 500,
        }
        // ... يمكنك إضافة المزيد من المشروبات هنا
      ]
    }
    // يمكنك إضافة المزيد من الأقسام هنا بنفس الطريقة
  ]
};