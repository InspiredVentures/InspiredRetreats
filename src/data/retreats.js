import safariImg from '../assets/images/exp_safari.png';
import arcticImg from '../assets/images/exp_arctic.png';
import peruImg from '../assets/images/exp_peru.png';
import japanImg from '../assets/images/exp_japan.png';
import rajaImg from '../assets/images/exp_raja.png';
import patagoniaImg from '../assets/images/exp_patagonia.png';
import namibiaImg from '../assets/images/exp_namibia.png';
import scotlandImg from '../assets/images/exp_scotland.png';
import bhutanImg from '../assets/images/exp_bhutan.png';

export const retreatsData = [
    {
        id: 'conservationists-asana',
        title: "The Conservationist's Asana",
        subtitle: "Yoga & Wildlife Preservation",
        location: "Kruger, South Africa",
        description: "A symbiotic journey of yoga and tracking, supporting the Endangered Wildlife Trust. This isn't just a safari; it's a deep immersion into the rhythm of the bushveld.",
        longDescription: "In the heart of the Kruger, the day begins not with an alarm, but with the dawn chorus of the bushveld. This journey is designed to strip away the noise of modern life, replacing it with the primal rhythm of nature. By combining the internal stillness of yoga with the external focus of wildlife tracking, we create a state of heightened awareness that is rarely accessible in the urban world.\n\nBut this is more than a retreat; it is an act of service. We partner directly with the Endangered Wildlife Trust, giving you exclusive access to join veterinarians and rangers on the front lines of conservation. You won't just watch elephants from a Land Rover; you will understand the complex ecosystem they support, leaving with a profound sense of connection to the wild.",
        image: safariImg,
        highlights: [
            "Private Yoga Deck overlooking the Sabie River",
            "Rhino De-horning conservation experience",
            "Sunset meditations on Pride Rock",
            "Bush dinners under the Milky Way"
        ],
        itinerary: [
            { day: "Day 1", title: "Arrival & Grounding", desc: "Land in Skukuza. Transfer to private lodge. Sunset gentle flow." },
            { day: "Day 2", title: "The Tracker's Mind", desc: "Morning bush walk identifying spoor. Afternoon vinyasa focusing on balance." },
            { day: "Day 3", title: "Conservation in Action", desc: "Join the vet team for a vital conservation procedure. Evening fire-side debrief." },
            { day: "Day 4", title: "Sillness & Sound", desc: "Silent sunrise game drive. Sound bath healing session in the bush." },
            { day: "Day 5", title: "Departure", desc: "Final sunrise meditation. Brunch and departure." }
        ],
        specialTouch: "A 'Bush Bath' experience where guests enjoy a vintage copper tub soak set up in a secluded clearing, surrounded by lanterns and the sounds of the night.",
        charity: {
            name: "Endangered Wildlife Trust",
            description: "A portion of proceeds goes directly to funding the anti-poaching canine unit, protecting rhinos in the region."
        }
    },
    {
        id: 'desert-alchemist',
        title: "Desert Alchemist",
        subtitle: "Stargazing & Silence",
        location: "Sossusvlei, Namibia",
        description: "Astrophotography and silence in the world's oldest desert. Reconnect with the cosmos in a landscape that feels like another planet.",
        longDescription: "There are few places left on Earth where silence is absolute. The Namib Desert is one of them. Here, amidst the tallest dunes in the world, the landscape looks more like Mars than Earth. This retreat uses that alien beauty to force a total reset of the mind. Without phone signal or city lights, your brain is finally free to think clearly, creatively, and deeply.\n\nWhen the sun sets, the real show begins. Namibia is a top-tier Dark Sky Reserve, offering views of the cosmos that will humble you. Guided by expert astronomers, we use high-powered telescopes to explore the universe, finding perspective in the infinite. This is alchemy for the soul: turning the lead weight of burnout into the gold of inspiration.",
        image: namibiaImg,
        highlights: [
            "Climbing Big Daddy dune at sunrise",
            "Private astronomy masterclasses",
            "Luxury tented camp experience",
            "Hot air balloon flight over the desert"
        ],
        itinerary: [
            { day: "Day 1", title: "Into the Void", desc: "Private charter flight to Sossusvlei. Welcome dinner." },
            { day: "Day 2", title: "Dune Dynamics", desc: "Sunrise climb. Breathwork in Deadvlei." },
            { day: "Day 3", title: "Cosmic Perspective", desc: "Deep sleep recovery. Night-time astrophotography workshop." },
            { day: "Day 4", title: "Sky Safari", desc: "Hot air balloon flight. Champagne breakfast." },
            { day: "Day 5", title: "Return", desc: "Flight back to Windhoek." }
        ],
        specialTouch: "A private 'Star-Bed' sleep-out experience, sleeping directly under the Milky Way on a secure, elevated platform.",
        charity: {
            name: "Desert Lion Conservation",
            description: "Supporting Dr. Philip Stander's work in tracking and protecting the unique desert-adapted lions of Namibia."
        }
    },
    {
        id: 'arctic-silence',
        title: "Arctic Silence",
        subtitle: "Mindfulness at the Edge of the World",
        location: "Svalbard, Norway",
        description: "Expedition mindfulness and glaciology under the midnight sun. A voyage to the realm of the polar bear.",
        longDescription: "Svalbard is a place of extremes. In summer, the sun never sets, bathing the glaciers in a perpetual, surreal golden light. We charter a private expedition vessel to take you to the edge of the pack ice - the realm of the polar bear. This is a journey to the end of the world, designed to show you the beauty of the fragile and the temporary.\n\nOn board, life slows down. We practice mindfulness on the deck as ancient blue ice floats by. We hike across the flowering tundra, learning from glaciologists about the history written in the ice. It is a stark, honest landscape that demands your full attention, washing away the trivial worries of daily life.",
        image: arcticImg,
        highlights: [
            "Polar plunge and sauna ritual",
            "Glacier hiking with expert geologists",
            "Midnight sun meditation",
            "Wildlife photography (Polar Bears, Walrus)"
        ],
        itinerary: [
            { day: "Day 1", title: "Longyearbyen Embarkation", desc: "Board the vessel. Safety briefing and welcome toast." },
            { day: "Day 2", title: "Ice Fjords", desc: "Cruising majestic fjords. On-deck mindfulness." },
            { day: "Day 3", title: "The Pack Ice", desc: "Searching for bears on the sea ice. Zodiac briefing." },
            { day: "Day 4", title: "Tundra Walk", desc: "Hiking the flowering tundra. Historical lecture." },
            { day: "Day 5", title: "Disembarkation", desc: "Return to civilization renewed." }
        ],
        specialTouch: "A 'Silence of the Sea' concert, where a classical cellist performs Bach suites on the deck while floating past a glacier.",
        charity: {
            name: "Polar Bears International",
            description: "Funding research into sea ice preservation, critical for the survival of the arctic ecosystem."
        }
    },
    {
        id: 'ancestral-echoes',
        title: "Ancestral Echoes",
        subtitle: "Wisdom of the Andes",
        location: "Sacred Valley, Peru",
        description: "High-altitude trekking combined with traditional shamanic culinary rituals.",
        longDescription: "The Andes are alive. To the Incas, the mountains were 'Apus' - spirits that watched over the people. This retreat invites you to walk among them. We combine the physical meditation of high-altitude trekking with the deep spiritual grounding of Andean cosmology. Each step on the Inca trail is a step back in time, connecting you to a civilization that understood how to live in harmony with the earth.\n\nFood is our other guide. We explore the 'Pachamama' (Mother Earth) through culinary rituals, from harvesting native potatoes at 12,000 feet to participating in a traditional Pachamanca earth-oven feast. By feeding the body with sacred food and the spirit with ancient wisdom, we return to the modern world with a renewed sense of gratitude.",
        image: peruImg,
        highlights: [
            "Private blessing by Q'ero Shaman",
            "Visit to Moray agricultural ruins",
            "Pachamanca earth-oven feast",
            "Luxury lodge-to-lodge trekking"
        ],
        itinerary: [
            { day: "Day 1", title: "Cusco Acclimatization", desc: "Cocoa leaf reading. Gentle city walk." },
            { day: "Day 2", title: "The Sacred Valley", desc: "Transfer to Urubamba. Pottery workshop." },
            { day: "Day 3", title: "Mountain Spirit", desc: "Trek to Huchuy Qosqo. Picnic lunch." },
            { day: "Day 4", title: "Machu Picchu", desc: "Private guided exploration of the citadel." },
            { day: "Day 5", title: "Departure", desc: "Transfer to airport." }
        ],
        specialTouch: "A 'Pachamanca' feast where guests assist in preparing and burying the food in the earth, then unearthing it hours later for a sacred meal",
        charity: {
            name: "Centro de Textiles Tradicionales",
            description: "Supporting local weavers to preserve ancient Andean textile techniques and provide economic independence for women."
        }
    },
    {
        id: 'zen-creation',
        title: "Zen & Creation",
        subtitle: "The Art of Focus",
        location: "Kyoto, Japan",
        description: "Private temple stays dedicated to creative writing and tea ceremony arts.",
        longDescription: "Kyoto is a city where every shadow and stone is placed with intention. For the creative mind, this is paradise. We have secured exclusive access to stay within the sub-temples of historic Zen complexes, usually closed to the public. Here, you will wake to the chanting of monks and the smell of incense, beginning each day with a clear, empty mind.\n\nThis emptiness is the canvas for your creation. Whether you are writing a book, designing a strategy, or simply journaling, the discipline of Zen removes the clutter. Through the arts of Tea Ceremony and Calligraphy, we learn that beauty lies in simplicity and restraint. You will leave not just with new work, but with a new way of seeing the world.",
        image: japanImg,
        highlights: [
            "Private Zazen meditation with Head Monk",
            "Exclusive Tea Ceremony in a historic teahouse",
            "Morning writing workshops in zen gardens",
            "Kaiseki dining experience"
        ],
        itinerary: [
            { day: "Day 1", title: "Arrival in Kyoto", desc: "Check-in to temple lodging. Shojin Ryori dinner." },
            { day: "Day 2", title: "The Empty Mind", desc: "Morning meditation. Calligraphy workshop." },
            { day: "Day 3", title: "The Focused Mind", desc: "Philosopher's path walk. Writing sprint." },
            { day: "Day 4", title: "The Aesthetic Mind", desc: "Ikebana flower arranging. Farewell dinner." },
            { day: "Day 5", title: "Departure", desc: "Bullet train to Tokyo." }
        ],
        specialTouch: "A private consultation with a master kimono maker to select a silk fabric that represents your 'creative intention' for the year.",
        charity: {
            name: "Kyoto Machiya Fund",
            description: "Restoring and preserving traditional wooden townhouses (machiya) that define the architectural heritage of the city."
        }
    },
    {
        id: 'kingdom-clouds',
        title: "Kingdom of Clouds",
        subtitle: "Gross National Happiness",
        location: "Paro, Bhutan",
        description: "Exploring Gross National Happiness through monastery meditations and mountain archery.",
        longDescription: "Bhutan challenges the world's definition of success. Here, Gross National Happiness is valued over GDP, and pine forests cover 70% of the land. This retreat is an inquiry into what it means to live a good life. As we travel from the rice paddies of Paro to the high passes of Dochula, we engage in dialogues with lamas, farmers, and artists about contentment and community.\n\nThe landscape itself is a teacher. Hiking to the Tiger's Nest monastery, perched precariously on a cliff face, requires effort and faith. Sitting in the ancient dzongs (fortresses), you feel the weight of centuries of spiritual practice. We invite you to slow down, breathe the mountain air, and ask yourself: what truly makes me happy?",
        image: bhutanImg,
        highlights: [
            "Hike to Tiger's Nest Monastery",
            "Traditional Archery Tournament",
            "Hot Stone Bath ritual",
            "Audience with a Rinpoche"
        ],
        itinerary: [
            { day: "Day 1", title: "Thimphu Arrival", desc: "Land in Paro. Drive to Thimphu." },
            { day: "Day 2", title: "Ancient Wisdom", desc: "Visit to the Great Buddha Dordenma." },
            { day: "Day 3", title: "Mountain Pass", desc: "Drive over Dochula Pass. Punakha Dzong visit." },
            { day: "Day 4", title: "The Climb", desc: "Tiger's Nest hike. Celebration dinner." },
            { day: "Day 5", title: "Departure", desc: "Flight out of Paro." }
        ],
        specialTouch: "A personalized astrology reading by a temple astrologer, providing a birth chart according to the Bhutanese lunar calendar.",
        charity: {
            name: "Tarayana Foundation",
            description: "Uplifting vulnerable rural communities in Bhutan through housing, scholarships, and skills training."
        }
    },
    {
        id: 'blue-sanctuary',
        title: "Blue Sanctuary",
        subtitle: "Deep Blue Restoration",
        location: "Raja Ampat, Indonesia",
        description: "Freediving mastery integrated with a hands-on coral restoration project.",
        longDescription: "Raja Ampat is the crown jewel of the ocean - the most biodiverse marine habitat on the planet. To explore it on scuba is amazing; to explore it on a single breath is transformative. We charter a traditional hand-built Phinisi yacht to sail these turquoise waters, using the vessel as a floating dojo for freediving training. \n\nFreediving is 90% mental. It teaches you to control your nervous system, conserve oxygen, and find calm in high-pressure environments. We pair this personal mastery with planetary service. You will work alongside marine biologists to replant coral reefs, ensuring that this blue sanctuary remains vibrant for generations to come.",
        image: rajaImg,
        highlights: [
            "PADI Freediver Certification",
            "Manta Ray snorkeling encounter",
            "Coral planting workshop",
            "Private beach barbeque"
        ],
        itinerary: [
            { day: "Day 1", title: "Sorong Embarkation", desc: "Board the Phinisi. Set sail." },
            { day: "Day 2", title: "Breath", desc: "Static apnea training. Shallow reef snorkel." },
            { day: "Day 3", title: "Depth", desc: "Line diving workshops. Manta point." },
            { day: "Day 4", title: "Impact", desc: "Coral restoration activity. Sunset sail." },
            { day: "Day 5", title: "Departure", desc: "Disembark in Sorong." }
        ],
        specialTouch: "A night-time snorkel in a 'secret' biome where the water glows bright blue with bioluminescent plankton.",
        charity: {
            name: "The Coral Triangle Center",
            description: "Dedicated to the protection of coral reef biodiversity and the sustainable management of marine resources."
        }
    },
    {
        id: 'highland-mists',
        title: "Highland Mists",
        subtitle: "Legends & Letters",
        location: "Glencoe, Scotland",
        description: "Atmospheric writing retreat in a historic manor, surrounded by dramatic peaks.",
        longDescription: "There is a reason Scotland has inspired poets and kings for millennia. The dramatic play of light and shadow in Glencoe touches something deep in the human psyche. We take over a private highland estate, turning it into a sanctuary for storytelling. With roaring fires, fine whisky, and walls lined with books, this is the ultimate space to unlock your narrative voice.\n\nWe balance the cozy interior world with the rugged outdoors. Guided hikes through the 'Lost Valley' clear the cobwebs, while evening sessions with a traditional Seanchaí (storyteller) remind us of the power of the spoken word. Whether you are leading a company or writing a memoir, tapping into this ancient bardic tradition will make you a more powerful communicator.",
        image: scotlandImg,
        highlights: [
            "Guided hike through the Lost Valley",
            "Whisky tasting with a master distiller",
            "Private storytelling session (Seanchaí)",
            "Wild swimming in a loch"
        ],
        itinerary: [
            { day: "Day 1", title: "The Glen", desc: "Arrival at estate. Welcome feast." },
            { day: "Day 2", title: "The Elements", desc: "Morning hike. Afternoon writing block." },
            { day: "Day 3", title: "The Spirit", desc: "Distillery tour. Creative prompts." },
            { day: "Day 4", title: "The Story", desc: "Sharing circle. Gala dinner." },
            { day: "Day 5", title: "Departure", desc: "Transfer to Glasgow." }
        ],
        specialTouch: "A custom leather-bound journal waiting in your room, embossed with your initials and a quote from a Scottish poet.",
        charity: {
            name: "Scottish Book Trust",
            description: "Promoting literacy and the love of reading, gifting books to families and schools across Scotland."
        }
    },
    {
        id: 'fire-ice',
        title: "Fire & Ice",
        subtitle: "The Wim Hof Way",
        location: "Patagonia, Chile",
        description: "Wim Hof-style breathwork amidst glaciers, ending with open-fire feasts.",
        longDescription: "Patagonia is not for the faint of heart. It is a land of jagged peaks, calving glaciers, and fierce winds. It is the perfect testing ground for the human spirit. Drawing inspiration from the Wim Hof Method, this retreat focuses on cold exposure and breathwork as tools for building resilience. By voluntarily facing the cold, we learn to control our fear response and find warmth from within.\n\nWe balance this intensity with extreme comfort. Our luxury yurt camp offers shelter and warmth, where we gather each night for open-fire feasts. As we trek to the base of the Torres del Paine, we strip away the layers of modern comfort to rediscover the raw capability of our own bodies and minds.",
        image: patagoniaImg,
        highlights: [
            "Glacier ice bath challenge",
            "Puma tracking experience",
            "Asado (BBQ) with local gauchos",
            "Base of the Towers hike"
        ],
        itinerary: [
            { day: "Day 1", title: "Arrival", desc: "Transfer to Camp. Gear check." },
            { day: "Day 2", title: "Breath", desc: "Fundamentals of breathwork. Short hike." },
            { day: "Day 3", title: "Cold", desc: "Grey Glacier boat trip and exposure." },
            { day: "Day 4", title: "Fire", desc: "Full day hike to the Towers. Lamb Asado." },
            { day: "Day 5", title: "Departure", desc: "Transfer to Punta Arenas." }
        ],
        specialTouch: "A traditional 'Mate' ceremony with local Gauchos, learning the etiquette and history of this communal drink.",
        charity: {
            name: "Reforest Patagonia",
        }
    },
    {
        id: 'sacred-water',
        title: "Sacred Water",
        subtitle: "Purification & Flow",
        location: "Ubud, Bali",
        description: "A water-centric healing journey through Bali's sacred springs and hidden canyons.",
        longDescription: "Water is the lifeblood of Bali. Known as 'Agama Tirta' (The Religion of Holy Water), Balinese spirituality is inextricably linked to cleansing and flow. This retreat takes you to the source. From the holy springs of Tirta Empul to the hidden waterfalls of the northern highlands, we explore the element of water as a medium for emotional release.\n\nWe stay in a private estate hanging over the Ayung River, where the sound of rushing water is a constant companion. Daily practices include 'Water Contact Dance', floating meditation, and a traditional 'Melukat' purification ceremony led by a High Priestess. Wash away the old; let the new flow in.",
        image: rajaImg, // Reusing Raja Ampat img for water theme
        highlights: [
            "Melukat Purification Ceremony",
            "Hidden Canyon Canyoning",
            "Water Temple pilgramage",
            "Floating breakfast ritual"
        ],
        itinerary: [
            { day: "Day 1", title: "Arrival", desc: "Check-in to River Estate. Welcome circle." },
            { day: "Day 2", title: "Source", desc: "Tirta Empul purification. Rice terrace walk." },
            { day: "Day 3", title: "Flow", desc: "River rafting or canyoning. Water dance." },
            { day: "Day 4", title: "Stillness", desc: "Silent day. Sound healing." },
            { day: "Day 5", title: "Departure", desc: "Closing ceremony." }
        ],
        specialTouch: "A private consultation with a 'Balian' (traditional healer) who reads your energy and prescribes a specific herbal jamu tonic.",
        charity: {
            name: "Sungai Watch",
            description: "Installing trash barriers in rivers to prevent plastic from entering the ocean."
        }
    },
    {
        id: 'alpine-summit',
        title: "Alpine Summit",
        subtitle: "The Philosophy of Ascent",
        location: "Dolomites, Italy",
        description: "Mountaineering and Stoic philosophy in the dramatic peaks of the Dolomites.",
        longDescription: "The climb is a perfect metaphor for life. It requires preparation, endurance, and the ability to find a foothold when the path seems impossible. This retreat combines the physical challenge of Via Ferrata climbing with the intellectual rigor of Stoic philosophy. Each evening, after conquering a peak, we gather in a luxury rifugio to discuss Marcus Aurelius and Seneca.\n\nThis is not just about physical fitness; it is about mental fortitude. The jagged limestone peaks of the Dolomites provide the ultimate classroom. As you hang suspended on a cliff face, you learn to control your fear and focus on the only thing within your control: your next step.",
        image: patagoniaImg, // Reusing Patagonia img for mountain theme
        highlights: [
            "Via Ferrata climbing (Beginner friendly)",
            "Sunrise on Seceda ridgeline",
            "Gourmet mountain hut dining",
            "Stoic philosophy workshops"
        ],
        itinerary: [
            { day: "Day 1", title: "Base Camp", desc: "Arrival in Cortina. Gear fitting." },
            { day: "Day 2", title: "The Obstacle", desc: "First Via Ferrata climb. Evening seminar." },
            { day: "Day 3", title: "The View", desc: "Tre Cime di Lavaredo hike. Sunset photography." },
            { day: "Day 4", title: "The Feast", desc: "Helicopter to remote rifugio for gala dinner." },
            { day: "Day 5", title: "Descent", desc: "Morning reflection. Departure." }
        ],
        specialTouch: "A 'Summit Toast' with a rare vintage Grappa at the highest point of the retreat (3000m).",
        charity: {
            name: "Dolomites UNESCO Foundation",
            description: "Preserving the geological heritage and sustainable tourism of this World Heritage site."
        }
    }
];
