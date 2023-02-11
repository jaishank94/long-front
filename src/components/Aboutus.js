import { Instagram, Mail } from '@mui/icons-material';
import TwitterIcon from '@mui/icons-material/Twitter';


export default function About() {
  return (

    <div className="mt-16 sm:mt-32lg:mx-auto md:mx-5 max-w-[88rem] mt-10 overflow-hidden">
      <div className="lg:pl-20">
        <div className="max-w-xs px-2.5 lg:max-w-none">
          {/* <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            /> */}
        </div>
      </div>
      <div className="lg:order-first lg:row-span-2">
        <h1 className="text-4xl text-center font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          About Us
        </h1>
        <div className="mt-6 space-y-4 text-base text-zinc-600 dark:text-zinc-300 text-center">
          <p>
            Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Mattis vulputate enim nulla aliquet porttitor lacus. Ac felis donec et odio pellentesque. Sapien et ligula ullamcorper malesuada proin. Et ultrices neque ornare aenean euismod.
          </p>
          <p>
            Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Ornare quam viverra orci sagittis eu. Adipiscing elit duis tristique sollicitudin nibh sit. Nunc eget lorem dolor sed.
          </p>
          <p>
            Ac tortor vitae purus faucibus ornare suspendisse sed.
          </p>
          <ul className="list-inside list-disc text-left w-1/2 mx-auto">
            <li>Ac tortor vitae purus faucibus ornare suspendisse sed. </li>
            <li>Risus quis varius quam quisque</li>
            <li>
              Magnis dis parturient montes nascetur ridiculus mus mauris vitae
            </li>
            <li>Vulputate odio ut enim blandit volutpat maecenas volutpat</li>
            <li>
              Orci sagittis eu volutpat odio facilisis mauris sit amet
            </li>
            <li>
              Cursus turpis massa tincidunt dui ut ornare lectus sit
            </li>
            <li>
              Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique.
            </li>
          </ul>
          <p className='font-semibold'>
            Habitant morbi tristique senectus et netus et malesuada. Sed risus ultricies tristique nulla aliquet enim. Adipiscing diam donec adipiscing tristique. Odio morbi quis commodo odio aenean sed adipiscing diam. Id aliquet lectus proin nibh nisl condimentum id venenatis. Ornare arcu odio ut sem. A diam maecenas sed enim ut sem viverra aliquet. Eget mi proin sed libero enim. At consectetur lorem donec massa sapien faucibus et. Velit aliquet sagittis id consectetur purus ut.
          </p>
        </div>
      </div>
      {/* <div className="lg:pl-20">
        <ul role="list">
          <li>
            <a
              href='#'
              target={'_blank'}
              rel="noopener noreferrer"
              className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
            >
              <TwitterIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
              <span className="ml-4">Follow on Twitter</span>
            </a>
          </li>
          <li>
            <a
              href='#'
              target={'_blank'}
              rel="noopener noreferrer"
              className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
            >
              <Instagram className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
              <span className="ml-4">Follow on Instagram</span>
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  )
}