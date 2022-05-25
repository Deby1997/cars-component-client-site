import React from 'react';

const Review = () => {
  return (
    <div >
      <h1 className='text-3xl font-bold text-center text-accent'>Customer Review</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 m-5'>
        <section className='card w-96 bg-base-100 shadow-xl p-5'>
          <header >
            {/* profile */}
            <div class="avatar online">
              <div class="w-24 rounded-full">
                <img src="https://i.pinimg.com/236x/77/71/68/7771683223d86b237a3304d6f32828b9--headshot-poses-headshot-photography.jpg" alt='' />
              </div>
            </div>
            {/* star */}
            <div class="rating">
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            </div>
          </header>
          <article>
            <h1 className='text-sm'>Juwliya Jully</h1>
            <p>Reviewed in the United States on January 5, 2022</p>
            <p className=' text-xs'>This is a great product and it works. Years ago I had a Suzuki Samurai with a small 4 cylinder engine and ran the heck out of it in extreme Texas weather. Used Tufoil religiously. At 175,000 miles, when I sold it, the engine purred. </p>
          </article>
        </section>
        <section className='card w-96 bg-base-100 shadow-xl p-5'>
          <header >
            {/* profile */}
            <div class="avatar offline">
              <div class="w-24 rounded-full">
                <img src="https://i.pinimg.com/originals/4d/9a/f2/4d9af21d7f94f209f5293836c6409247.jpg" alt='' />
              </div>
            </div>
            {/* star */}
            <div class="rating">
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            </div>
          </header>
          <article>
            <h1 className='text-sm'>	Tim smith</h1>
            <p>Reviewed in the Japan on February 24, 2020</p>
            <p className=' text-xs'>I've been using it for about a month now. I have a 2008 Cayenne turbo that tends to run warm. I can definitely say that I've noticed that the engine runs cooler since I've added tufoil. I don't know how but it just does. During regular stop and go traffic the temp needle tended to go a little past the middle way mark. Since I've added tufoil it stays in the middle about 90% of the time. So on the lower operating temp claim, I will say that it is accurate.</p>
          </article>
        </section>
        <section className='card w-96 bg-base-100 shadow-xl p-5'>
          <header >
            {/* profile */}
            <div class="avatar online">
              <div class="w-24 rounded-full">
                <img src="https://pbs.twimg.com/profile_images/1523224141045936129/ceMQbNSp_400x400.jpg" alt='' />
              </div>
            </div>
            {/* star */}
            <div class="rating">
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            </div>
          </header>
          <article>
            <h1 className='text-sm'>Hank51</h1>
            <p>Reviewed in the China on June 25, 2015</p>
            <p className=' text-xs'>I have used this in every car I've owned since the late 70's. The first was a 1972 Chevy Caprice with about 80k on it and a carb - no fuel injection. I put it in after an oil change, drove around a bit, and noticed nothing. The next day I drove it the 50miles or so to work on the highway at 65 mph. When I stopped at the exit ramp, the car was revving so high I thought I'd throw a rod! I had to jump out and manually lower the idle - a lot! My gas mileage went up a great deal and the Tufoil paid for itself in one tank of gas. It has increased mileage significantly on every vehicle I've owned since. Fabulous additive!!</p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Review;