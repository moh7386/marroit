// menu-config.js

const menuConfigData = {
  hotelName_en: "Marriott Aden Hotel",
  hotelName_ar: "فندق ماريوت عدن",

  heroMainTitle_ar: "اجعل وجبتك اليوم ذكرى لا تُنسى.",
  heroSubtitle_ar: "طعم يشدك",
  heroButtonText_ar: "اكتشف قائمتنا",

  hotelLogo: "images/hotel_logo.png",
  heroSliderImages: [
    "images/mar.jpg",
    "images/m.jpg",
    // "images/hero/dish_highlight_1.jpg",
    // "images/hero/restaurant_interior_2.jpg",
    // "images/hero/dish_highlight_2.jpg"
  ],

  currency_en: "YER",
  currency_ar: "ريال",
  roomServiceNote_en: "Marriott 2025", // Updated to reflect user's example
  roomServiceNote_ar: "جميع الحقوق محفوظة فندق ماريوت 2025",
  categories: [
    {
      id: "breakfast",
      name_en: "Breakfast Favorites",
      name_ar: "الإفطار",
      mainImage: "images/breakfast_collage.jpg", // Placeholder image
      items: [
        {
          name_en: "Oriental Breakfast",
          name_ar: "إفطار شرقي",
          price: 8000,
          description_ar: "تشكيلة من الجبن، زيتون، الفول المدمس أو الفاصوليا، الطماطم والخيار واختيارك من البيض حسب رغبتك (مسلوق أو مقلي) ويقدم الحليب أو شاي."
        }
      ]
    },
    {
      id: "soups",
      name_en: "Soups",
      name_ar: "الشوربة",
      mainImage: "images/soups_collage.jpg",
      items: [
        {
          name_en: "Lentil Soup",
          name_ar: "شوربة عدس",
          price: 2500, // Corrected price from OCR
          description_ar: "شوربة العدس بالطريقة الأصلية، مع البهارات الشرقية." // Corrected description
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
          price: 4000, // Corrected price from OCR
          description_ar: "شوربة الدجاج المقلية مع الخضروات الطازجة على الطريقة اليمنية والبهارات." // Corrected description
        }
        /* {
          name_en: "Soup of the Day",
          name_ar: "شوربة اليوم",
          price: "Ask Server", // Price was X'd out
          description_ar: "اسأل النادل عن شوربة اليوم المميزة."
        } */
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
          description_ar: "تشكيلة من الجبن الأبيض وجبنة شيدر والجبن المثلث مع الزيتون وشرائح الخيار والطماطم." // More specific description
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
          price: 3500,
          description_ar: "جبنة فيتا، طماطم، خيار، بصل، زيتون أسود متبله مع صلصة زيت الزيتون والخل." // More specific
        },
        {
          name_en: "Marriott's Famous Salad (Chef's Choice)",
          name_ar: "سلطة ماريوت الشهيرة (من اختيار الشيف)",
          price: 7000,
          description_ar: "مزيج فريد من المكونات الطازجة من اختيار الشيف."
        }
       ]
	},
    {
      id: "sandwiches",
      name_en: "Sandwiches",
      name_ar: "الساندويتشات",
      mainImage: "images/sandwiches_collage.jpg", // Placeholder image
      items: [
        {
          name_en: "Burger (Meat or Chicken)",
          name_ar: "برجر (لحم أو دجاج)",
          price: 3500, // Assuming this is for a single, "دبل" was 2500
          description_ar: "برجر لحم او دجاج صافي مع صلصة المايونيز والمخللات والبصل السوتيه يقدم بخبز السمسم والبطاطس المقلية."
        },
        {
          name_en: "Double Chicken Burger",
          name_ar: "برجر دجاج دبل",
          price: 5500,
          description_ar: "برجر دجاج دبل مع صلصة المايونيز والمخللات والبصل السوتيه يقدم بخبز السمسم والبطاطس المقلية."
        },
        {
          name_en: "Tuna Sandwich",
          name_ar: "ساندوتش تونة",
          price: 5000,
          description_ar: "تونة مع بصل مفروم مع مينيز مع خس وطماطم مع خبز محمص."
        },
        {
          name_en: "Create Your Own Sandwich",
          name_ar: "اصنع سندويشك حسب رغبتك",
          price: 7000,
          description_ar: "اختيارك من الخبز الأبيض أو الأسمر مع الزبدة أو المايونيز واختيارك من الجبنة، تونا، الدجاج المشوي، يقدم مع البطاطس المقلية."
        }
      ]
    },
    {
      id: "pasta_corner",
      name_en: "Pasta Corner (Spaghetti)",
      name_ar: "ركن الباستا (سباغيتي)",
      mainImage: "images/pasta_collage.jpg", // Placeholder image
      items: [
        {
          name_en: "Spaghetti with Tuna",
          name_ar: "مكرونة بالتونة",
          price: 5500,
          description_ar: "باستا مع صلصة الطماطم، والتونة والبهارات."
        },
        {
          name_en: "Spaghetti Bolognese",
          name_ar: "مكرونة بالدقة (بولونيز)",
          price: 9000,
          description_ar: "باستا مع اللحمة المفرومة وصلصة الطماطم الطازجة."
        },
        {
          name_en: "Spaghetti with Chicken",
          name_ar: "مكرونة بالدجاج",
          price: 7000, // User example for "مكرونه بیف" was 7000, using same for chicken as per printed menu
          description_ar: "باستا مع مكعبات الدجاج، صلصة طماطم وبهارات."
        },
        {
          name_en: "Spaghetti with Fresh Vegetables & Herbs",
          name_ar: "مكرونة بالخضار",
          price: 4000,
          description_ar: "باستا مع الخضار الطازجة والأعشاب."
        },
        {
          name_en: "Spaghetti with Shrimps",
          name_ar: "مكرونة بالجمبري",
          price: 15000,
          description_ar: "باستا مع الجمبري، صلصة طماطم، والبهارات اليمنية."
        }
      ]
    },
    {
      id: "main_course_grill",
      name_en: "Main Course - From the Grill",
      name_ar: "الطبق الرئيسي - المشاوي",
      mainImage: "images/grill_background.jpg",
      items: [
        { name_en: "Mixed Grill Platter", name_ar: "مشاوي مشكلة", price: 15000, description_ar: "طاووق، شيش كباب، كفتة، تشكيلة من اسياخ شيش المقليه يقدم مع البطاطس." },
        { name_en: "Shish Taouk", name_ar: "شيش طاووق", price: 7000, description_ar: "قطع دجاج متبلة بصلصة الثوم، الليمون والخل. يقدم مع البطاطس المقلية." },
        { name_en: "Chicken Kofta", name_ar: "كفتة دجاج", price: 8000, description_ar: "الدجاج المفروم المتبل مع البقدونس والبصل والبهارات العربية يقدم مع البطاطس المقلية." },
        { name_en: "Meat Kofta", name_ar: "كفتة لحم", price: 13000, description_ar: "اللحم المفروم المتبل مع البقدونس والبصل والبهارات العربية يقدم مع البطاطس المقلية." },
        { name_en: "Broasted Chicken (Half)", name_ar: "دجاج بروست (ربع)", price: 5000, description_ar: "نصف دجاجة متبلة ومقلية بنكهة البهارات الخاصة. ويقدم مع البطاطس المقلية." },
        { name_en: "Broasted Chicken (Full)", name_ar: "دجاج بروست (نصف)", price: 10000, description_ar: "دجاجة كاملة متبلة ومقلية بنكهة البهارات الخاصة. وتقدم مع البطاطس المقلية." },
        { name_en: "Grilled Chicken (Half)", name_ar: "دجاج مشوي (نصف دجاجة)", price: 8500, description_ar: "نصف دجاجة متبلة مع الثوم، صلصة الليمون، زيت الزيتون. يقدم مع الأرز أو البطاطس المقلية." },
        { name_en: "Grilled Shrimp", name_ar: "جمبري مشوي", price: 15000, description_ar: "جمبري متبل مع الثوم، صلصة الليمون، زيت الزيتون والكزبرة الطازجة يقدم مع البطاطس المقلية، أو الأرز." },
        { name_en: "Grilled Fish Fillet", name_ar: "سمك مشوي فيليه", price: 12000, description_ar: "سمك متبل مع الثوم، صلصة الليمون، زيت الزيتون، الخردل والكزبرة الطازجة. يقدم مع الأرز أو الشيبس. (السعر قد يختلف حسب النوع والحجم)" }
      ]
    },
    {
      id: "yemeni_cuisine",
      name_en: "Yemeni Cuisine",
      name_ar: "المطبخ اليمني",
      mainImage: "images/yemeni_cuisine_collage.jpg", // Placeholder image
      items: [
        { name_en: "Fresh Lamb Liver", name_ar: "كبدة غنم بلدي (نفر كبير)", price: 7500, description_ar: "كبدة غنم طازجة مطهيه مع البصل والطماطم والفلفل الأخضر والتوابل اليمنية تقدم مع الخبز." },
        { name_en: "Chicken Curry", name_ar: "دجاج بالكاري", price: 5500, description_ar: "قطع دجاج متبله ومطهيه بالتوابل الهندية تقدم مع الأرز الأبيض." },
        { name_en: "Samak Mutafaya (Fish Sauté)", name_ar: "سمك مطفاية", price: 13000, description_ar: "شرائح السمك مقلاة مع البصل المحمر، البسباس الحار، الطماط والكزبرة يقدم مع الأرز الشرقي." },
        { name_en: "Chicken Akda", name_ar: "عقدة دجاج", price: 6000, description_ar: "متبلة بنكهة خاصة من التوابل العدنية مطهية مع الخضار تقدم مع الأرز." },
        { name_en: "Shakshoka (Scrambled Eggs)", name_ar: "شكشوكة", price: 3500, description_ar: "بيض مخفوق مع الخضروات، البسباس الحار والكزبرة الخضراء تقدم مع الخبز. (السعر حسب التفاصيل)" },
        { name_en: "Small Meat (Lahm Saghar)", name_ar: "لحم صغار", price: 7000, description_ar: "قطع لحم صغيرة مطهوة على الطريقة اليمنية." },
        { name_en: "Raqat Lahm (Thin Meat)", name_ar: "دقة لحم", price: 6500, description_ar: "شرائح لحم رقيقة مطهوة." },
        { name_en: "Fasoolia (Beans) - Plain", name_ar: "فاصوليا عادي", price: 3500, description_ar: "فاصوليا مطبوخة سادة." },
        { name_en: "Fasoolia Nashif", name_ar: "فاصوليا ناشف", price: 4000, description_ar: "فاصوليا مطبوخة بالطريقة الناشفة." },
        { name_en: "Fasoolia with Eggs", name_ar: "فاصوليا بالبيض", price: 4000, description_ar: "فاصوليا مطبوخة مع البيض." },
        { name_en: "Fasoolia with Cheese", name_ar: "فاصوليا بالجبن", price: 4000, description_ar: "فاصوليا مطبوخة مع الجبن." },
		{ name_en: "Fasoolia with Tuna", name_ar: "فاصوليا بالتونة", price: 4000, description_ar: "فاصوليا مطبوخة مع التونة." },
        // Fasoolia with Tuna price not specified
        { name_en: "Foul   - Plain", name_ar: "فول عادي", price: 3500, description_ar: "فول سادة على طريقة  ." },
        { name_en: "Foul   with Tahini", name_ar: "فول   بالطحينية", price: 4000, description_ar: "فول على طريقة   مع الطحينية." },
        { name_en: "Foul   with Eggs", name_ar: "فول   بالبيض", price: 4000, description_ar: "فول على طريقة   مع البيض." },
		{ name_en: "Foul   with Tuna", name_ar: "فول   بالتونة", price: 4000, description_ar: "فول على طريقة   مع التونة." },
		{ name_en: "Foul   with Cheese", name_ar: "فول   بالجبن", price: 4000, description_ar: "فول على طريقة   مع الجبن." },
        // Foul with Tuna/Cheese prices not specified for  
        { name_en: "Bazlia (Peas) - Plain", name_ar: "بازليا سادة", price: 3500, description_ar: "بازلاء مطبوخة سادة." },
        { name_en: "Bazlia with Tuna", name_ar: "بازليا بالتونة", price: 3500, description_ar: "بازلاء مطبوخة مع التونة." },
        { name_en: "Bazlia with Eggs", name_ar: "بازليا بالبيض", price: 4000, description_ar: "بازلاء مطبوخة مع البيض." },
		{ name_en: "Bazlia with Cheese", name_ar: "بازليا بالجبن", price: 4000, description_ar: "بازلاء مطبوخة مع الجبن." },
        // Bazlia with Cheese price not specified
        { name_en: "Fried Eggs", name_ar: "بيض عيون", price: 4000, description_ar: "بيض مقلي عيون." },
        { name_en: "Shakshouka", name_ar: "شكشوكة", price: 3500, description_ar: "بيض مخفوق." },
		{ name_en: "Shakshouka", name_ar: "بيض بالخضار", price: 3500, description_ar: "بيض مطبوخ مع الخضار" },
		{ name_en: "Cheese Eggs", name_ar: "بيض بالجبنة", price: 3500, description_ar: "بيض مع الجبن" },
        { name_en: "Grilled Direk Fish", name_ar: "سمك مشوي ديرك", price: "Ask Server", description_ar: "سمك ديرك مشوي. (السعر حسب الوزن/التفاصيل)" }, // Price 200 likely per 100g or error
        { name_en: "Direk Fish Tafaaya", name_ar: "سمك طفاية ديرك", price: "Ask Server", description_ar: "سمك ديرك مطبوخ بطريقة الطفاية. (السعر حسب الوزن/التفاصيل)" }, // Price 100 likely per 100g or error
        { name_en: "Direk Broast Fish", name_ar: "سمك برست ديرك", price: 13000, description_ar: "سمك ديرك مقلي بروست." },
		{ name_en: "Thamd Broast Fish", name_ar: "سمك برست ثمد", price: 13000, description_ar: "سمك ثمد مقلي بروست." },
        { name_en: "Chicken with Rice", name_ar: "دجاج مع الرز", price: 8500, description_ar: "طبق دجاج مقدم مع الأرز." },
        { name_en: "Kabsa (Cold/Hot)", name_ar: "كبسة (بارد/حار)", price: 13000, description_ar: "كبسة دجاج" },
		 {name_en: "Sahawq Plain",name_ar: "سحاوق عادي",price: 1000,description_ar: "صلصة السحاوق اليمنية التقليدية الحارة."},
        {name_en: "Sahawq with Cheese",name_ar: "سحاوق جبن",price: 3000,description_ar: "صلصة السحاوق اليمنية مع إضافة الجبن."}
        ]
    },
    {
      id: "desserts",
      name_en: "Desserts",
      name_ar: "الحلويات",
      mainImage: "images/desserts_collage.jpg", // Placeholder image
      items: [
        { name_en: "Fresh Fruit Salad", name_ar: "طبق الفواكه الطازجة", price: 9000, description_ar: "تشكيلة من الفواكه الموسمية الطازجة." },
        { name_en: "Fresh Fruit Platter", name_ar: "سلطة الفواكه الطازجة", price: 6000, description_ar: "قطع فواكه طازجة منوعة." },
         ]
    },
    {
      id: "cold_beverages",
      name_en: "Cold Beverages",
      name_ar: "المشروبات الباردة",
      mainImage: "images/cold_beverages_collage.jpg", // Placeholder image
      items: [
        { name_en: "Fresh Orange Juice", name_ar: "عصير برتقال طازج", price: 2500, description_ar: "عصير برتقال طازج ومعصور يومياً." },
        { name_en: "Fresh Lemon Juice", name_ar: "عصير ليمون طازج", price: 700, description_ar: "عصير ليمون منعش وطازج." },
        { name_en: "Mango Juice", name_ar: "عصير المانجو", price: 700, description_ar: "عصير مانجو طبيعي." },
        { name_en: "Milk with Banana Juice", name_ar: "عصير الحليب بالموز", price: 1800, description_ar: "مزيج الحليب الطازج مع الموز." },
        { name_en: "Ginger Juice", name_ar: "عصير الزنجبيل", price: 1800, description_ar: "عصير زنجبيل طازج ومنعش." },
        { name_en: "Mineral Water", name_ar: "ماء معدني", price: 800, description_ar: "مياه معدنية نقية." },
        { name_en: "Soft Drinks", name_ar: "مشروبات غازية", price: 1200, description_ar: "مجموعة متنوعة من المشروبات الغازية." }
      ]
    },
    {
      id: "hot_beverages",
      name_en: "Hot Beverages",
      name_ar: "المشروبات الساخنة",
      mainImage: "images/hot_beverages_collage.jpg", // Placeholder image
      items: [
        { name_en: "Turkish Coffee", name_ar: "قهوة تركية", price: 2800, description_ar: "قهوة تركية محضرة بالطريقة التقليدية." },
        { name_en: "Nescafe", name_ar: "نسكافيه", price: 2500, description_ar: "قهوة نسكافيه سريعة التحضير." },
        { name_en: "Tea", name_ar: "شاي", price: 400, description_ar: "شاي أحمر أو أخضر كلاسيكي." }, // Price X'd out, estimated 1000-1500
        { name_en: "Adani Tea", name_ar: "شاي عدني", price: 400, description_ar: "شاي عدني مبهر بالحليب والهيل والبهارات." }
      ]
    }
  ]
};