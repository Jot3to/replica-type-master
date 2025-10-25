import { Hero } from "@/components/Hero";
import { ContentSection } from "@/components/ContentSection";
import { ContentBlock } from "@/components/ContentBlock";
import { FeaturedImage } from "@/components/FeaturedImage";
import { ClosingSection } from "@/components/ClosingSection";
import toddlerSleeping from "@/assets/toddler-sleeping.jpg";
import parentChildBedtime from "@/assets/parent-child-bedtime.jpg";
import consultantFamily from "@/assets/consultant-family.jpg";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero 
        badge="Sleep Resources"
        title="How I Got My Toddler Sleeping 11 Hours a Night in Just 7 Days (Without Cry-It-Out)"
        subtitle="This is the 5-step method that's helped over 800 families end middle-of-the-night wake-ups in just two weeks – plus what to do when DIY isn't enough."
        author="Sarah Martinez, Certified Pediatric Sleep Consultant"
        date="July 14, 2025"
        imageSrc={toddlerSleeping}
        imageAlt="Peaceful toddler sleeping comfortably"
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-4xl bg-white">
        <ContentSection title="The 3 AM Wake Up Call That Changed Everything">
          <p>
            Three months ago, I was sitting in my kitchen at 3:17 AM, holding my crying two-year-old for the fourth time that night. My husband was passed out on the couch (lucky him), and I was running on maybe 2 hours of sleep. Again.
          </p>
          <p>
            I remember thinking: "There has to be a better way."
          </p>
          <p>
            As a pediatric sleep consultant, I help families with this exact problem every single day. But here's was, completely lost with my own toddler who treated bedtime like a suggestion rather than a rule.
          </p>
          <p>
            That's when I realized something important, even us "experts" struggle with our own kids sometimes. And if I was having trouble, then thousands of other parents were probably going through the same nightmare.
          </p>
        </ContentSection>

        <ContentSection title="Why Most Toddler Sleep Advice Doesn't Work (It's Not What You Think)">
          <p>
            Most parents think their toddler is just being difficult. But after working with over 800 families, I've learned that night-waking usually comes down to three simple things:
          </p>

          <ContentBlock title="The Bedtime Shuffle">
            <p>
              Your toddler's internal clock gets confused when bedtime changes every night. Monday it's 7:30, Tuesday it's 8:15, Wednesday you're running late and it's 9:00. Their little brains can't create a pattern, so they wake up at random times throughout the night.
            </p>
          </ContentBlock>

          <ContentBlock title="The Nap Trap">
            <p>
              Late afternoon naps are sleep killers. If your toddler naps after 3 PM, they're not tired enough at bedtime. They'll lay there wide awake, then crash around 10 PM and wake up ready to party at midnight.
            </p>
          </ContentBlock>

          <ContentBlock title="The Bedroom Chaos">
            <p>
              Toddlers need their room to scream "sleep time." But most bedrooms are full of distractions – nightlights that are too bright, toys everywhere, sounds from other rooms. Their brain stays in "play mode" instead of "sleep mode."
            </p>
          </ContentBlock>

          <p>
            Here's the thing: once you understand these three issues, fixing them becomes way, way easier.
          </p>
        </ContentSection>

        <FeaturedImage 
          src={parentChildBedtime}
          alt="Parent lovingly tucking in child at bedtime"
        />

        <ContentSection title="My 5 Step 'Sleep Reset' Method (Try This Tonight)">
          <p>
            After that brutal 3 AM wake-up call, I created a simple system that any parent can use. I tested it with my own daughter first, then with my clients. <strong>It works about 85% of the time</strong> when parents stick to it.
          </p>

          <ContentBlock title="Step 1: Pick Your Bedtime and Stick to It">
            <p>
              Choose one bedtime (like 7:30 PM) and don't let it move more than 15 minutes all week. Your toddler's body clock will start syncing with you instead of against you.
            </p>
          </ContentBlock>

          <ContentBlock title="Step 2: End All Naps by 2 PM">
            <p>
              I know this sounds scary, but late naps are the enemy of good nighttime sleep. If your toddler is still napping at 4 PM, they won't be tired at bedtime. Cut off naps by 2 PM, even if they're only sleeping for a few days.
            </p>
          </ContentBlock>

          <ContentBlock title="Step 3: Create a Cave">
            <p>
              Make their bedroom as dark as possible. Cover any blinking lights, use blackout curtains, and keep it quiet. Think "cozy cave" not "fun playroom."
            </p>
          </ContentBlock>

          <ContentBlock title="Step 4: The 30-Minute Wind-Down">
            <p>
              Start bedtime routine 30 minutes before bedtime. Read books, sing quiet songs, or do gentle stretches. No screens, no rough play, no exciting activities. This tells their brain it's time to slow down.
            </p>
          </ContentBlock>

          <ContentBlock title="Step 5: The One-Time Check-In Rule">
            <p>
              When they call out or come to your room, you can check on them once. Keep it short and boring – no long conversations or extra stories. Then leave and don't go back, even if they cry for a bit.
            </p>
          </ContentBlock>

          <p>
            Most families see fewer wake-ups within 3-4 nights using just these steps.
          </p>
        </ContentSection>

        <ClosingSection 
          imageSrc={consultantFamily}
          imageAlt="Sarah Martinez with happy family"
          title="How I Help Families Get Full Nights of Sleep"
          content="After struggling with my own daughter's sleep, I created a hands-on sleep program to help families who need more than generic advice. It's called a Peaceful Nights Method, and it's helped over 800 families get their toddlers (and themselves!) sleeping through the night in an average of 7 days."
          authorNote="Hi! I'm Sarah Martinez, Certified Pediatric Sleep Consultant"
          ctaText="It's a personalized, two-week program where I work with you directly to solve your toddler's sleep challenges."
        />
      </div>
    </main>
  );
};

export default Index;
