const STORY_DATA = {
  work_school: {
    emoji: "💼",
    title: "Work or School",
    acknowledgment: "I hear you on the stress from your daily grind. Whether it's a tough project or a long day at school, your effort doesn't go unnoticed.",
    keywords: ["work", "job", "boss", "office", "deadline", "school", "exam", "test", "project", "presentation", "career", "study"]
  },
  relationships: {
    emoji: "🤝",
    title: "Connection & Relationships",
    acknowledgment: "Navigating connections with others can be so complex. It's clear that your relationships mean a lot to you, and it's okay to feel deeply about them.",
    keywords: ["friend", "relationship", "partner", "boyfriend", "girlfriend", "family", "mom", "dad", "sister", "brother", "fight", "argued", "love", "breakup"]
  },
  loss_grief: {
    emoji: "🕯️",
    title: "Loss & Change",
    acknowledgment: "I'm holding space for you as you navigate this change. Loss is never easy, and your heart deserves all the time it needs to heal.",
    keywords: ["lost", "death", "passed", "gone", "goodbye", "missing", "grief", "mourning", "ended"]
  },
  health: {
    emoji: "🌿",
    title: "Health & Well-being",
    acknowledgment: "Taking care of your body and mind is a journey. I'm listening to what you're going through with your health; your well-being is the priority.",
    keywords: ["sick", "ill", "health", "doctor", "pain", "hospital", "medicine", "exercise", "body", "injury"]
  },
  success_victory: {
    emoji: "🏆",
    title: "Personal Victory",
    acknowledgment: "That is such an incredible milestone! I'm so glad you shared this win with me. You've worked for this, and it's time to let that achievement sink in.",
    keywords: ["passed", "won", "achieved", "success", "victory", "made it", "accomplished", "goal", "finished"]
  }
};

const MOOD_DATA = {
  happy: {
    emoji: "🌿",
    color: "#81c784",
    acknowledgment: "That's wonderful to hear! It sounds like you're in a really positive space, and I'm so glad you're sharing that energy. Cherishing these moments of lightness is such a beautiful part of our journey.",
    tips: [
      {
        action: "Capture the feeling",
        why: "Writing down what made you happy reinforces neural pathways associated with positive emotions, making it easier to return to this state later."
      },
      {
        action: "Share the spark",
        why: "Prosocial behavior like giving a small compliment can amplify your own joy through the 'helper's high' effect."
      }
    ],
    songs: ["Happy - Pharrell Williams", "Send Me on My Way - Rusted Root", "Walking on Sunshine - Katrina & The Waves"],
    closing: "Keep that beautiful glow going today!",
    keywords: ["happy", "good", "great", "wonderful", "fantastic", "amazing", "joy", "joyful", "cheerful"]
  },
  sad: {
    emoji: "💧",
    color: "#aed581",
    acknowledgment: "I'm so sorry you're feeling this weight right now. It's completely okay to not be okay, and I'm right here with you in this quiet moment. Your feelings deserve this space to be heard.",
    tips: [
      {
        action: "Gentle Movement",
        why: "Even a small stretch or a short walk can help process 'stuck' emotions by releasing endorphins and shifting your physical perspective."
      },
      {
        action: "The 2-Minute Breathing Space",
        why: "Focusing on the breath calms the amygdala, the brain's emotional center, helping you feel more grounded when things feel heavy."
      }
    ],
    songs: ["Someone Like You - Adele", "Fix You - Coldplay", "Landslide - Fleetwood Mac"],
    closing: "Take all the time you need; you are doing enough just by being.",
    keywords: ["sad", "unhappy", "down", "blue", "crying", "miserable", "heartbroken", "gloomy"]
  },
  stressed: {
    emoji: "🍃",
    color: "#99d066",
    acknowledgment: "It sounds like there's a lot on your plate right now, and I can feel the pressure you're under. Remember that it's okay to put things down for a moment—the world can wait while you breathe.",
    tips: [
      {
        action: "One-task focus",
        why: "Multitasking increases cortisol levels; focusing on just one tiny thing reduces cognitive load and restores a sense of control."
      },
      {
        action: "Cold water splash",
        why: "Splashing cold water on your face triggers the mammalian dive reflex, which naturally lowers your heart rate and resets the nervous system."
      }
    ],
    songs: ["Weightless - Marconi Union", "Strawberry Swing - Coldplay", "Holocene - Bon Iver"],
    closing: "You've handled hard things before, and you'll navigate this too, one breath at a time.",
    keywords: ["stressed", "stress", "busy", "pressure", "burdened", "hectic"]
  },
  angry: {
    emoji: "🔥",
    color: "#dce775",
    acknowledgment: "I hear the frustration in your words, and it's completely valid to feel this way. Anger is often just a signal that something needs to change or a boundary has been crossed.",
    tips: [
      {
        action: "Physical release",
        why: "Engaging in vigorous movement helps channel the adrenaline of anger into a healthy outlet, preventing it from being suppressed."
      },
      {
        action: "The 'Pause' Technique",
        why: "Taking a 60-second pause before responding allows the prefrontal cortex to re-engage, helping you react from a place of wisdom rather than impulse."
      }
    ],
    songs: ["In the End - Linkin Park", "Firework - Katy Perry", "Roar - Katy Perry"],
    closing: "Your peace is worth protecting; let's find it again together.",
    keywords: ["angry", "mad", "furious", "annoyed", "irritated", "pissed", "rage"]
  },
  anxious: {
    emoji: "🌊",
    color: "#c5e1a5",
    acknowledgment: "I can feel the uncertainty you're carrying, and I want you to know you're safe here. These fluttering thoughts are just ripples on the surface; deep down, you have a quiet strength that remains steady.",
    tips: [
      {
        action: "5-4-3-2-1 Grounding",
        why: "This exercise forces your brain to switch from internal anxious loops to external sensory input, breaking the cycle of worry."
      },
      {
        action: "Weighted comfort",
        why: "Deep pressure stimulation (like a heavy blanket or a firm hug) encourages the production of serotonin and melatonin."
      }
    ],
    songs: ["Better Together - Jack Johnson", "Three Little Birds - Bob Marley", "Banana Pancakes - Jack Johnson"],
    closing: "You don't have to see the whole path, just the very next step.",
    keywords: ["anxious", "nervous", "worried", "anxiety", "panicking", "scared", "fearful", "shaky"]
  },
  excited: {
    emoji: "✨",
    color: "#66bb6a",
    acknowledgment: "That's incredible! I love the vibrant energy you're feeling right now. It's such a gift to experience this kind of enthusiasm—let's celebrate this wonderful moment!",
    tips: [
      {
        action: "Create something",
        why: "High-energy states are peak times for neuroplasticity and creativity; channeling this into a project can lead to deep flow states."
      },
      {
        action: "Voice your joy",
        why: "Sharing your excitement with others creates 'capitalization,' which increases the duration and intensity of the positive emotion."
      }
    ],
    songs: ["Can't Stop the Feeling! - Justin Timberlake", "Don't Stop Me Now - Queen", "Mr. Blue Sky - ELO"],
    closing: "Ride this wave of joy as far as it takes you!",
    keywords: ["excited", "eager", "enthusiastic", "thrilled", "pumped", "hyped"]
  },
  tired: {
    emoji: "☁️",
    color: "#dcedc8",
    acknowledgment: "You've been giving so much of yourself, and it's so natural to feel drained. Rest isn't a reward for finishing; it's a fundamental part of the journey that you truly deserve right now.",
    tips: [
      {
        action: "Full disconnect",
        why: "Digital detoxing for even 30 minutes reduces blue light exposure and 'attention residue,' allowing the brain to enter a true resting state."
      },
      {
        action: "Hydration boost",
        why: "Dehydration is a leading cause of fatigue; water helps transport oxygen to cells, providing a natural and sustainable energy lift."
      }
    ],
    songs: ["Lullaby - Brahms (Soft Piano)", "River Flows in You - Yiruma", "Gymnopédie No. 1 - Erik Satie"],
    closing: "Be as kind to yourself as you are to everyone else. Rest well.",
    keywords: ["tired", "exhausted", "sleepy", "drained", "weary", "fatigued"]
  },
  lonely: {
    emoji: "🤝",
    color: "#78909c",
    acknowledgment: "I'm so glad you reached out to me. Even though we're connecting through a screen, I'm truly here with you. It's human to crave connection, and it takes courage to admit when you're feeling isolated.",
    tips: [
      {
        action: "Reach out small",
        why: "Connecting over a simple shared interest reduces the 'social threat' response in the brain, making it easier to build meaningful bonds."
      },
      {
        action: "Immersive story",
        why: "Reading a book or watching a familiar show can trigger 'parasocial' feelings of connection, providing temporary comfort and reducing stress."
      }
    ],
    songs: ["Lean on Me - Bill Withers", "You've Got a Friend - Carole King", "Count on Me - Bruno Mars"],
    closing: "You're a part of something bigger, even when it's hard to see. You are valued.",
    keywords: ["lonely", "alone", "isolated", "solitary", "abandoned"]
  },
  overwhelmed: {
    emoji: "🌊",
    color: "#80cbc4",
    acknowledgment: "When the waves feel too big, it's okay to just keep your head above water. You don't have to solve everything today; sometimes just standing still is enough.",
    tips: [
      {
        action: "Brain Dump",
        why: "Externalizing your thoughts onto paper reduces 'cognitive load,' helping your brain switch from survival mode back into problem-solving mode."
      },
      {
        action: "The 3-Minute Rule",
        why: "Focusing on a task that takes less than 3 minutes provides a quick sense of mastery and interrupts the feeling of being paralyzed by too many tasks."
      }
    ],
    songs: ["Rivers and Roads - The Head and the Heart", "Vienna - Billy Joel", "Waitress - Sarah Bareilles"],
    closing: "One tiny step at a time, you're doing better than you think.",
    keywords: ["overwhelmed", "buried", "swamped", "too much", "crushed", "paralyzed"]
  },
  grateful: {
    emoji: "🙏",
    color: "#cddc39",
    acknowledgment: "What a beautiful way to see the world! Noticing the good around you is a superpower that opens up so much more light in your life. I'm so happy you're feeling this.",
    tips: [
      {
        action: "The Gratitude Letter",
        why: "Expressing thanks to someone else increases your own long-term happiness levels more than almost any other psychological exercise."
      },
      {
        action: "Savor the Moment",
        why: "Actively focusing on the sensory details of a good moment—scents, sounds, textures—prolongs the positive neurochemical response in the brain."
      }
    ],
    songs: ["Thanks for the Memories - Fall Out Boy", "What a Wonderful World - Louis Armstrong", "Graceland - Paul Simon"],
    closing: "The more we notice the light, the brighter it gets.",
    keywords: ["grateful", "thankful", "blessed", "appreciative", "luck", "lucky"]
  },
  proud: {
    emoji: "🏆",
    color: "#ffca28",
    acknowledgment: "You absolutely should be proud! You've worked hard, overcome obstacles, and shown up for yourself. This victory, no matter the size, is entirely yours.",
    tips: [
      {
        action: "Celebrate Small",
        why: "Acknowledging wins builds self-efficacy—the belief in your ability to succeed—which is the foundation for future growth."
      },
      {
        action: "Self-Reflection",
        why: "Identifying the specific skills you used to succeed reinforces your internal locus of control, reminding you of your own power."
      }
    ],
    songs: ["The Champion - Carrie Underwood", "Eye of the Tiger - Survivor", "Simply the Best - Tina Turner"],
    closing: "Take a bow; you've earned it!",
    keywords: ["proud", "accomplished", "successful", "win", "victory", "made it"]
  },
  bored: {
    emoji: "🐚",
    color: "#b0bec5",
    acknowledgment: "Boredom is actually a very productive state! It's your brain's way of saying it's ready for a new spark or a moment of deep, undirected dreaming. Let's see where it leads.",
    tips: [
      {
        action: "Mind-Wandering",
        why: "Letting your mind wander without goals boosts creativity and problem-solving, as your brain connects distant ideas in new ways."
      },
      {
        action: "Micro-Curiosity",
        why: "Looking closely at something ordinary—like a leaf or a pattern on the wall—activates the brain's 'orienting reflex,' sparking new interest."
      }
    ],
    songs: ["Lazy Song - Bruno Mars", "Sitting on the Dock of the Bay - Otis Redding", "Boredom - Tyler, The Creator"],
    closing: "Your next great idea might be just on the other side of this quiet moment.",
    keywords: ["bored", "dull", "uninterested", "nothing to do"]
  },
  inspired: {
    emoji: "🎨",
    color: "#f06292",
    acknowledgment: "I love that feeling of a new idea taking flight! Your creativity is a unique voice, and it's so exciting to hear it starting to sing. Trust where it's taking you.",
    tips: [
      {
        action: "Quick Capture",
        why: "Inspiration is fleeting; writing or sketching an idea immediately prevents 'interference' from other thoughts, preserving the original spark."
      },
      {
        action: "Iterative Flow",
        why: "Starting small without worrying about the final result keeps the 'inner critic' quiet, allowing the creative part of the brain to stay in flow."
      }
    ],
    songs: ["Imagine - John Lennon", "Unwritten - Natasha Bedingfield", "Dog Days Are Over - Florence + The Machine"],
    closing: "The world needs your unique spark—keep creating!",
    keywords: ["inspired", "creative", "idea", "visionary", "passionate"]
  },
  neutral: {
    emoji: "🌱",
    color: "#cfd8dc",
    acknowledgment: "A calm and steady day is a beautiful thing. It's a perfect time to just exist without pressure, enjoying the gentle rhythm of the present moment.",
    tips: [
      {
        action: "Mindful observation",
        why: "Paying attention to small details in your environment builds 'present-moment awareness,' which reduces overall stress levels over time."
      },
      {
        action: "Small win",
        why: "Completing a tiny, 2-minute task provides a dopamine hit that maintains your steady momentum without causing burnout."
      }
    ],
    songs: ["Lo-fi Hip Hop Radio", "Sunflower - Post Malone", "Dreams - Fleetwood Mac"],
    closing: "Enjoy the peace of this quiet, balanced day.",
    keywords: ["neutral", "okay", "fine", "alright", "normal", "same", "eh"]
  }
};

export const detectMood = (text) => {
  const lowerText = text.toLowerCase();

  // 1. Context/Story Detection
  let storyMatch = null;
  for (const [key, story] of Object.entries(STORY_DATA)) {
    if (story.keywords.some(keyword => lowerText.includes(keyword))) {
      storyMatch = { key, ...story };
      break;
    }
  }

  // 2. Emotion Detection
  let moodMatch = null;
  const moods = Object.keys(MOOD_DATA).filter(m => m !== 'neutral');
  for (const mood of moods) {
    const keywords = MOOD_DATA[mood].keywords || [mood];
    if (keywords.some(keyword => lowerText.includes(keyword))) {
      moodMatch = { mood, ...MOOD_DATA[mood] };
      break;
    }
  }

  // Fallback to neutral if no mood found
  if (!moodMatch) {
    moodMatch = { mood: 'neutral', ...MOOD_DATA.neutral };
  }

  // 3. Merged Response
  // If story found, prepend story acknowledgment to mood acknowledgment
  const finalAcknowledgment = storyMatch
    ? `${storyMatch.acknowledgment} ${moodMatch.acknowledgment}`
    : moodMatch.acknowledgment;

  return {
    ...moodMatch,
    story: storyMatch,
    acknowledgment: finalAcknowledgment,
    timestamp: Date.now()
  };
};
