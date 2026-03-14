export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  items: FAQItem[];
}

export const FAQ_CATEGORIES: FAQCategory[] = [
  {
    id: 'about-the-product',
    name: 'About the Product',
    description: 'Everything about the ingredients, quality, and production of FiberZ.',
    icon: '/icon-fiber-intake.png',
    items: [
      {
        question: 'What is FiberZ and what is it made of?',
        answer: 'FiberZ is a premium dietary fiber supplement made from resistant dextrin, a soluble fiber derived from non-GMO corn starch. Each sachet contains a precisely measured dose of fiber designed to help you meet your recommended daily intake easily and conveniently.',
      },
      {
        question: 'Where is FiberZ produced?',
        answer: 'FiberZ is produced in Serbia by Fidelinka Skrob d.o.o., a company with decades of experience in starch and fiber processing. Our production facility follows strict quality control standards to ensure every sachet meets the highest safety and purity requirements.',
      },
      {
        question: 'Does FiberZ contain GMO?',
        answer: 'No, FiberZ is made from non-GMO corn starch. We are committed to using only high-quality, non-genetically modified ingredients in our products.',
      },
      {
        question: 'Does FiberZ contain allergens?',
        answer: 'FiberZ is free from the most common allergens including gluten, dairy, soy, nuts, and eggs. It is suitable for people with most food sensitivities. However, if you have specific allergies, we recommend reviewing the full ingredient list on the packaging.',
      },
      {
        question: 'What is the shelf life of FiberZ?',
        answer: 'FiberZ has a shelf life of 24 months from the date of production when stored in a cool, dry place away from direct sunlight. Each package is clearly labeled with an expiration date for your convenience.',
      },
      {
        question: 'Is FiberZ suitable for vegans and vegetarians?',
        answer: 'Yes, FiberZ is 100% plant-based and suitable for both vegans and vegetarians. It contains no animal-derived ingredients or by-products.',
      },
    ],
  },
  {
    id: 'usage',
    name: 'Usage',
    description: 'How, when, and how much FiberZ to use.',
    icon: '/icon-easy-integration.png',
    items: [
      {
        question: 'What is the recommended daily dose of FiberZ?',
        answer: 'The recommended daily dose is 1-2 sachets per day. We suggest starting with one sachet daily and gradually increasing to two if needed. Each sachet provides a significant portion of your recommended daily fiber intake.',
      },
      {
        question: 'How do you prepare FiberZ?',
        answer: 'Simply dissolve one sachet of FiberZ in a glass of water (200-300ml), juice, or any beverage of your choice. Stir well until fully dissolved. FiberZ is tasteless and odorless, so it won\'t change the flavor of your drink.',
      },
      {
        question: 'When is the best time to take FiberZ?',
        answer: 'FiberZ can be taken at any time of day. Many users prefer taking it with breakfast or before meals to support digestive comfort. The most important thing is to take it consistently at a time that fits your routine.',
      },
      {
        question: 'How long can I use FiberZ continuously?',
        answer: 'FiberZ is safe for continuous, long-term daily use. Resistant dextrin is a well-studied dietary fiber with an excellent safety profile. Consistent daily use is recommended for the best results.',
      },
      {
        question: 'Do I need to drink more water while using FiberZ?',
        answer: 'While FiberZ dissolves completely in water, maintaining good hydration is always beneficial when increasing your fiber intake. We recommend drinking at least 6-8 glasses of water throughout the day.',
      },
      {
        question: 'Can I mix FiberZ with hot beverages?',
        answer: 'Yes, FiberZ can be mixed with both hot and cold beverages. It dissolves easily in coffee, tea, smoothies, and other drinks without affecting their taste or texture.',
      },
      {
        question: 'Can I add FiberZ to food?',
        answer: 'Absolutely! FiberZ can be added to soups, yogurt, oatmeal, sauces, and many other foods. Its neutral taste means it blends seamlessly into your meals.',
      },
      {
        question: 'Can children take FiberZ?',
        answer: 'FiberZ is formulated for adults. For children, we recommend consulting with a pediatrician before introducing any fiber supplement to their diet.',
      },
      {
        question: 'Can pregnant or nursing women use FiberZ?',
        answer: 'While FiberZ contains only natural dietary fiber, we recommend that pregnant or nursing women consult their healthcare provider before starting any new supplement.',
      },
      {
        question: 'Is it better to take FiberZ in the morning or in the evening?',
        answer: 'Both times work well. Taking it in the morning can help set a healthy routine, while taking it in the evening may help with overnight digestion. Choose whichever time is most convenient for you.',
      },
    ],
  },
  {
    id: 'health-and-safety',
    name: 'Health & Safety',
    description: 'Questions about health effects and contraindications.',
    icon: '/category-health.png',
    items: [
      {
        question: 'Who should not use FiberZ?',
        answer: 'People with bowel obstruction, acute inflammatory bowel conditions, or those who have been advised by their doctor to follow a low-fiber diet should not use FiberZ without medical consultation.',
      },
      {
        question: 'Can FiberZ cause side effects?',
        answer: 'FiberZ is generally well-tolerated. Some people may experience mild bloating or gas when first starting, which typically resolves within a few days as your digestive system adjusts. Starting with a lower dose can help minimize these effects.',
      },
      {
        question: 'Can I use FiberZ if I have diabetes?',
        answer: 'Resistant dextrin has been studied for its potential to help manage blood sugar levels. However, if you have diabetes, we recommend consulting your healthcare provider before starting FiberZ, as it may affect how your body processes glucose.',
      },
      {
        question: 'Can FiberZ help with weight loss?',
        answer: 'Dietary fiber can support weight management by promoting feelings of fullness and supporting healthy digestion. While FiberZ is not a weight loss product, incorporating adequate fiber into your diet is a recognized part of a healthy weight management strategy.',
      },
      {
        question: 'Can I take FiberZ with medications?',
        answer: 'Fiber can potentially affect the absorption of certain medications. We recommend taking FiberZ at least 2 hours before or after taking medications. Always consult your healthcare provider if you are on prescription medication.',
      },
      {
        question: 'Does FiberZ affect nutrient absorption?',
        answer: 'Resistant dextrin, the type of fiber in FiberZ, does not significantly interfere with the absorption of vitamins and minerals when taken as directed. It is one of the best-tolerated forms of supplemental fiber.',
      },
      {
        question: 'Is FiberZ safe for people with IBS?',
        answer: 'Many people with IBS find soluble fiber beneficial. However, since IBS symptoms vary widely, we recommend starting with a small dose and consulting your gastroenterologist before use.',
      },
      {
        question: 'Can FiberZ help with cholesterol?',
        answer: 'Research suggests that soluble fiber, including resistant dextrin, may help support healthy cholesterol levels as part of a balanced diet. FiberZ can be a convenient way to increase your soluble fiber intake.',
      },
      {
        question: 'Is FiberZ gluten-free?',
        answer: 'Yes, FiberZ is gluten-free. It is derived from corn starch and contains no wheat, barley, rye, or other gluten-containing grains.',
      },
      {
        question: 'Can FiberZ cause allergic reactions?',
        answer: 'Allergic reactions to resistant dextrin are extremely rare. FiberZ is free from common allergens. If you experience any unusual symptoms, discontinue use and consult your healthcare provider.',
      },
      {
        question: 'Does FiberZ interact with blood thinners?',
        answer: 'There are no known interactions between resistant dextrin and blood thinners. However, as with any supplement, we recommend discussing with your doctor if you take anticoagulant medications.',
      },
      {
        question: 'Can FiberZ improve gut health?',
        answer: 'Yes, resistant dextrin acts as a prebiotic, feeding beneficial gut bacteria and supporting a healthy microbiome. Regular use can contribute to improved digestive health and overall wellbeing.',
      },
    ],
  },
  {
    id: 'shipping-and-payment',
    name: 'Shipping & Payment',
    description: 'Information about ordering and delivery.',
    icon: '/icon-digestive.png',
    items: [
      {
        question: 'How long does delivery take?',
        answer: 'Standard delivery within Serbia takes 2-4 business days. For international orders, delivery typically takes 5-10 business days depending on the destination country and customs processing.',
      },
      {
        question: 'How much does shipping cost?',
        answer: 'Shipping costs vary depending on your location and order size. We offer free shipping on orders above a certain threshold. Exact shipping costs are calculated at checkout based on your delivery address.',
      },
      {
        question: 'What payment methods are available?',
        answer: 'We accept all major credit and debit cards (Visa, MasterCard, Maestro), bank transfers, and cash on delivery for orders within Serbia. Additional payment options may be available at checkout.',
      },
      {
        question: 'Do you ship internationally?',
        answer: 'Yes, we ship to most European countries. International shipping rates and delivery times vary by destination. Check our shipping page for a full list of supported countries and estimated delivery times.',
      },
      {
        question: 'Can I track my order?',
        answer: 'Yes, once your order is shipped, you will receive a tracking number via email. You can use this number to track your package through our courier partner\'s website.',
      },
      {
        question: 'What happens if my package is damaged during shipping?',
        answer: 'If your package arrives damaged, please contact our support team within 48 hours of delivery with photos of the damage. We will arrange a replacement or refund at no additional cost to you.',
      },
    ],
  },
  {
    id: 'returns-and-guarantee',
    name: 'Returns & Guarantee',
    description: 'Our customer satisfaction policy.',
    icon: '/icon-microbiota.png',
    items: [
      {
        question: 'What is your return policy?',
        answer: 'We offer a 30-day satisfaction guarantee. If you are not happy with your purchase, you can return unopened products within 30 days of delivery for a full refund, minus shipping costs.',
      },
      {
        question: 'How do I initiate a return?',
        answer: 'To initiate a return, contact our customer support team at info@fiberz.com with your order number. We will provide you with return instructions and a return authorization number.',
      },
      {
        question: 'Can I return opened products?',
        answer: 'For hygiene and safety reasons, we can only accept returns of unopened, sealed products. If you received a defective product, please contact us and we will arrange a replacement.',
      },
      {
        question: 'How long does it take to process a refund?',
        answer: 'Once we receive your returned product, refunds are processed within 5-7 business days. The refund will be credited to your original payment method.',
      },
      {
        question: 'Do you offer a money-back guarantee?',
        answer: 'Yes, we stand behind the quality of FiberZ. If you are not satisfied with your purchase for any reason, contact us within 30 days and we will work with you to resolve the issue.',
      },
    ],
  },
  {
    id: 'tips-and-recommendations',
    name: 'Tips & Recommendations',
    description: 'Expert tips for the best results.',
    icon: '/category-tips.png',
    items: [
      {
        question: 'How can I maximize the effects of FiberZ?',
        answer: 'For the best results, take FiberZ consistently every day, stay well-hydrated, and pair it with a balanced diet rich in fruits, vegetables, and whole grains. Regular physical activity also supports healthy digestion.',
      },
      {
        question: 'What foods pair well with FiberZ?',
        answer: 'FiberZ pairs well with smoothies, yogurt, oatmeal, soups, and juices. Since it\'s tasteless and odorless, it can be added to virtually any food or drink without altering the flavor.',
      },
      {
        question: 'How can I prevent bloating?',
        answer: 'Start with one sachet per day and gradually increase to the full recommended dose over a week. Drink plenty of water throughout the day and avoid taking FiberZ with carbonated beverages to minimize bloating.',
      },
      {
        question: 'Is it better to take FiberZ in the morning or in the evening?',
        answer: 'Both options work equally well. Morning intake can help kickstart your digestion for the day, while evening intake may support overnight digestive processes. Choose the time that best fits your daily routine.',
      },
      {
        question: 'Can I take FiberZ before exercise?',
        answer: 'Yes, taking FiberZ 30-60 minutes before exercise is fine. It dissolves quickly and should not cause any discomfort during physical activity. Stay hydrated as you normally would during your workout.',
      },
      {
        question: 'How do I store FiberZ properly?',
        answer: 'Store FiberZ in a cool, dry place away from direct sunlight and moisture. Keep the sachets sealed until use. There is no need to refrigerate the product.',
      },
      {
        question: 'Can I take FiberZ while intermittent fasting?',
        answer: 'FiberZ contains minimal calories and can generally be consumed during a fasting window without breaking your fast. However, check with your healthcare provider if you follow a strict fasting protocol.',
      },
    ],
  },
];
