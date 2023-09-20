// Get references to DOM elements
const chatlogs = document.getElementById('chatlogs');
const userInput = document.getElementById('userInput');

// Pre-defined responses (you can expand this)
const responses = {
    "hello": "Hello! How can I assist you today?",
    "how are you": "I'm just a chatbot, but I'm here to help!",
    "bye": "Goodbye! Have a great day!"
};

// Function to display a message in the chatlogs
function displayMessage(message, isUser = false) {
    const chatMessage = document.createElement('div');
    chatMessage.classList.add(isUser ? 'user-message' : 'bot-message');
    chatMessage.textContent = message;
    chatlogs.appendChild(chatMessage);
}

// Function to process user input and generate responses
function sendMessage() {
    const userMessage = userInput.value.trim();

    // Display the user's message in the chat
    displayMessage(userMessage, true);

    // Convert the user's message to lowercase for comparison
    const lowercasedUserMessage = userMessage.toLowerCase();

    // Check if the user's message matches any predefined responses
    if (responses.hasOwnProperty(lowercasedUserMessage)) {
        const botResponse = responses[lowercasedUserMessage];
        displayMessage(botResponse);
    } else if (lowercasedUserMessage === "tell us about india") {
        const indiaResponse = "India is a diverse and culturally rich country located in South Asia. " +
            "It is known for its ancient history, stunning landscapes, " +
            "and a wide range of languages and traditions. " +
            "Would you like to know more about a specific aspect of India?";
        displayMessage(indiaResponse);
    } else if (lowercasedUserMessage === "is it safe to travel india?") {
        const response = "It is absolutely safe to travel India. Millions of tourists from around the world visit the country without any significant complaints."
        displayMessage(response);
    } else if (lowercasedUserMessage === "list some affordable hotel options in india") {
        const response = "Sure! Here are some affordable options in India : " +
            "1. Budget Hotels: These are basic, no-frills accommodations that offer clean and comfortable rooms. " +
            "Price Range: Rs. 3500-7000 per night " +
            "2. Guesthouses and motels: These are economical options, especially among backpackers and solo travelers. " +
            "Price range: Rs. 7000-12000 per night " +
            "3. Heritage Homestays: In some parts of India, you can find heritage homestays which are affordable options that allow you to experience local culture and traditions while staying in a family home. " +
            "Price range: Rs. 10000-15000 per night " +
            "4. Off-season travel: If possible, it is advisable to consider traveling during off-season in popular tourist destinations, as hotels often offer lower rates to attract visitors during quieter times.";
        displayMessage(response);
    } else if(lowercasedUserMessage === "what are some must-visit tourist destinations in india?"){
        const response = "India offers diverse attractions. Some popular destinations include the Taj Mahal in Agra, Jaipur's historical sites, the backwaters of Kerala, and the Himalayan region.";
        displayMessage(response);
    }else if(lowercasedUserMessage === "what is the local cuisine like, and is it safe to eat street food?"){
        const response="Indian cuisine is diverse and flavorful. Street food can be delicious, but choose vendors with high turnover to ensure freshness and hygiene.";
        displayMessage(response);
    }else if(lowercasedUserMessage === "how is transportation within india, and what is the best way to get around?"){
        const response = "India has a well-developed transportation network. You can travel by train, bus, domestic flights, and taxis. In cities, consider using ride-sharing apps like Uber and Ola for convenience.";
        displayMessage(response);
    }else if(lowercasedUserMessage === "what languages are spoken in india?"){
        const response = "India is linguistically diverse, with Hindi and English being the official languages. English is widely understood and used for communication in urban areas and among the educated population.";
        displayMessage(response);
    }else if(lowercasedUserMessage === "what are the major festivals in india, and when do they occur?"){
        const response = "India celebrates numerous festivals throughout the year. Some major ones include Diwali (Festival of Lights), Holi (Festival of Colors), Eid, Christmas, and Navratri. Festival dates vary based on the lunar calendar, so it's advisable to check specific dates each year.";
        displayMessage(response);
    }else if(lowercasedUserMessage === "what is the process for obtaining local currency in india?"){
        const response="You can exchange foreign currency at banks, authorized exchange counters, or ATMs. ATMs are widely available in cities and accept international debit and credit cards.";
        displayMessage(response);
    }else if(lowercasedUserMessage === "how do i handle the bustling and crowded streets in indian cities?"){
        const response="Indian cities can be crowded. Be aware of your surroundings, exercise caution when crossing streets, and use designated pedestrian crossings. Keep your belongings secure to prevent theft.";
        displayMessage(response);
    }else if(lowercasedUserMessage === "what is the language of delhi?"){
        const response = "The primary language spoken in Delhi, India, is Hindi. Hindi is also the official language of the Indian government and one of the most widely spoken languages in the country.";
        displayMessage(response);
    }else if(lowercasedUserMessage === "what is the cuisine of delhi?"){
        const response = "Delhi, the capital city of India, offers a rich and diverse culinary experience with a wide range of delectable dishes that reflect its historical and cultural heritage. Here are some popular dishes and elements of Delhi's cuisine:\n"+
        "1.Paranthas: Delhi is famous for its stuffed paranthas, especially from the historic Parathe Wali Gali in Old Delhi. These flatbreads are filled with various ingredients like potatoes, paneer (cottage cheese), or lentils, and are served with pickles and yogurt.\n"+
        "2.Chaat: Delhi's street food scene is renowned for its chaat, which includes dishes like aloo chaat (spicy potato snack), papdi chaat (crispy dough wafers with toppings), and golgappa (pani puri).\n"+
        "3.Biryani: Delhi offers a variety of biryanis, including the aromatic and flavorful Mughlai biryani. These rice dishes are cooked with fragrant spices, meat (often chicken or mutton), and sometimes vegetables.\n"+
        "4.Kebabs: Delhi's kebabs, particularly seekh kebabs and galouti kebabs, are famous for their tenderness and flavor. They are often served with naan or roti.\n"+
        "5.Butter Chicken: This creamy and tomato-based chicken dish is a favorite in Delhi and is often enjoyed with buttery naan or rice.\n"+
        "6.Street Snacks: Delhi's street food vendors offer a wide variety of snacks, including kathi rolls, kachori, and dahi puri.";
        displayMessage(response);
    }else if(lowercasedUserMessage === "what is the language of maharashtra?"){
        const response = "The primary language spoken in the Indian state of Maharashtra, including its capital city Mumbai, is Marathi";
        displayMessage(response);
    }else if(lowercasedUserMessage === "what is the cuisine of maharashtra?"){
        const response = "Maharashtra, a state in western India, has a diverse and flavorful cuisine that reflects its rich cultural heritage and history. Here are some of the key elements and dishes of Maharashtra's cuisine:\n"+
        "1.Vada Pav: vada pav consists of a spicy potato fritter (vada) placed inside a pav (a type of soft bread). It's a popular street food snack.\n"+
        "2.Pav Bhaji: This is another famous street food item where a spicy vegetable curry (bhaji) is served with pav (bread rolls) and garnished with butter, onions, and coriander.\n"+
        "3.Misal Pav: A spicy and flavorful dish made from sprouted moth beans (matki) or other legumes, served with pav and garnished with farsan (crispy toppings).\n"+
        "4.Poha: A breakfast dish made from flattened rice cooked with spices, often garnished with peanuts, onions, and coriander.\n"+
        "5.Puran Poli: A sweet flatbread stuffed with a mixture of chana dal (split chickpeas), jaggery, and spices. It's a popular festival dish.\n"+
        "6.Modak: A sweet dumpling filled with a coconut and jaggery mixture, traditionally made during the Ganesh Chaturthi festival.";
        displayMessage(response);
    }else if(lowercasedUserMessage === "what is the language of himachal pradesh?"){
        const response = "The primary language spoken in Himachal Pradesh, a state in northern India, is Hindi";
        displayMessage(response);
    }else if(lowercasedUserMessage === "what is the cuisine of himachal pradesh?"){
        const response = "The cuisine of Himachal Pradesh includes a variety of flavors, ingredients, and dishes. Here are some of the notable elements of Himachali cuisine:\n"+
        "1.Dham: Dham is a traditional festive meal in Himachal Pradesh, often served at weddings and special occasions. It includes a variety of dishes such as chana dal, rajma (kidney beans), rice, curd, and different vegetable preparations, all cooked in aromatic spices.\n"+
        "2.Chana Madra: This is a popular dish made from chickpeas (chana) cooked in a yogurt-based gravy with aromatic spices. It's a staple in Himachali cuisine.\n"+
        "3.Dum Aloo: Himachali dum aloo features baby potatoes cooked in a rich and spicy gravy, often garnished with fresh coriander leaves.\n"+
        "4.Rajma Chawal: Red kidney beans (rajma) cooked with spices and served with steamed rice is a comforting and widely enjoyed dish \n"+
        "5.Thukpa: In the Tibetan-influenced areas of Himachal Pradesh, you can find thukpa, a hearty noodle soup with vegetables or meat.";
        displayMessage(response);
    }else if(lowercasedUserMessage === "what is the language of assam?"){
        const response = "The primary language spoken in the northeastern Indian state of Assam is Assamese. ";
        displayMessage(response);
    }else if(lowercasedUserMessage === "what is the cuisine of assam?"){
        const response = "Assamese cuisine, which originates from the northeastern Indian state of Assam, is known for its bold flavors, use of indigenous ingredients, and diverse range of dishes."+
        "Here are some key elements and dishes of Assamese cuisine:\n"+
        "1.Masor Tenga: A sour fish curry made with tomatoes and lemon, giving it a tangy flavor. Assamese cuisine frequently incorporates souring agents like tomatoes and elephant apple (ou tenga).\n"+
        "2.Xhar: A traditional Assamese thali or meal that includes a variety of dishes, such as rice, dal (lentil soup), vegetable curries, and fish or meat preparations.\n"+
        "3.Khar: A traditional alkaline dish made with raw papaya, pulses, and an alkali solution derived from sun-dried peels of specific types of sun-dried raw banana or pulses\n"+
        "4.Assam Laksa: A popular street food in Assam, it's a spicy noodle soup made with a tangy tamarind base, fish, and various herbs.";
        displayMessage(response);
    }else if(lowercasedUserMessage === "what is the language of west bengal?"){
        const response = "The primary language spoken in the Indian state of West Bengal is Bengali, which is often referred to as Bangla.";
        displayMessage(response);
    }else if(lowercasedUserMessage === "what is the cuisine of west bengal?"){
        const response = "West Bengal, located in the eastern part of India, has a rich and diverse culinary tradition that is deeply influenced by its history, geography, and culture. Here are some of the key elements of West Bengal's cuisine:\n"+
        "1.Machh (Fish) and Rice: Fish, especially freshwater varieties like rohu and hilsa, is a staple in West Bengal. Fish is prepared in various ways, including curries, steamed, and fried, and is often accompanied by fragrant rice.\n"+
        "2.Bengali Sweets: West Bengal is famous for its sweets, known as 'mishti' Some popular sweets include rasgulla (soft cheese balls in syrup), sandesh (sweetened paneer or chhena), and rosogolla (a variation of rasgulla).\n"+
        "3.Shorshe Ilish: Hilsa fish cooked in a mustard seed paste, a classic Bengali dish known for its unique flavor.\n"+
        "4.Bengali Bharta: Mashed vegetables like eggplant (baingan), potatoes, or tomatoes mixed with spices, mustard oil, and sometimes chilies.\n"+
        "5.Shingara: Similar to samosas, these are deep-fried pastries filled with spiced potatoes or minced meat.";
        displayMessage(response);
    }else if(lowercasedUserMessage === "what is the language of tamil nadu?"){
        const response = "The primary language spoken in the Indian state of Tamil Nadu is Tamil.";
        displayMessage(response);
    }else if(lowercasedUserMessage === "what is the cuisine of tamil nadu?"){
        const response = "Here are some key elements of Tamil Nadu's cuisine:\n"+
        "1.Sambar: A popular and flavorful lentil-based vegetable stew made with tamarind, vegetables, and a mix of spices. It is typically served with rice or idli/dosa.\n"+
        "2.Idli and Dosa: These steamed rice cakes (idli) and crispy rice and lentil pancakes (dosa) are a quintessential part of South Indian cuisine, often served with sambar and coconut chutney.\n"+
        "3.Rasam: A tangy and aromatic soup made from tamarind, tomatoes, and various spices. It is usually served as a soup or mixed with rice.\n"+
        "4.Chettinad Cuisine: Known for its spicy and aromatic flavors, Chettinad cuisine features dishes like Chettinad chicken curry and Chettinad fish curry.\n"+
        "5.Vada: Deep-fried lentil fritters, often served as a snack or with breakfast.\n"+
        "6.Payasam: A sweet and creamy dessert made from milk, rice, jaggery, and flavored with cardamom or saffron.";
        displayMessage(response);
    }else if(lowercasedUserMessage === "what is the language of rajasthan?"){
        const response = "Rajasthani is the primary language spoken in the Indian state of Rajasthan.";
        displayMessage(response);
    }else if(lowercasedUserMessage === "what is the cuisine of rajasthan?"){
        const response = "Rajasthani cuisine is known for its rich and flavorful dishes, which are influenced by the arid desert climate of the region"+
        "Here are some key elements of Rajasthan's cuisine:\n"+
        "1.Dal Baati Churma: This is one of the most famous and traditional dishes of Rajasthan. It consists of three parts: Dal (lentil curry), Baati (round wheat flour bread baked in a clay oven or over an open flame), and Churma (a sweet dish made from crushed Baati, ghee, and sugar). It's a hearty and delicious meal.\n"+
        "2.Gatte ki Sabzi: This is a popular curry made from gram flour (besan) dumplings cooked in a spicy yogurt-based gravy.\n"+
        "3.Ker Sangri: A unique and tangy dish made from dried berries (ker) and beans (sangri) native to the desert region. It is often cooked with spices and served as a side dish.\n"+
        "4.Ghewar: A popular sweet dish made from deep-fried flour soaked in sugar syrup and often garnished with mawa (reduced milk) and dry fruits. It's commonly prepared during festivals and special occasions.\n"+
        "5.Bajre ki Roti: Flatbread made from pearl millet (bajra) flour, commonly eaten with ghee or jaggery.";
        displayMessage(response);
    }
    else {
        // If no predefined response, display a default message
        displayMessage("I'm not sure I understand. Can you please rephrase that?");
    }

    // Clear the user input field
    userInput.value = '';
}

// Initial greeting
displayMessage("Hello! How can I assist you today?");
