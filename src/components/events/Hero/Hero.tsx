'use client'

import { Container } from '@/components/Container'
import { LargeButton } from '@/components/LargeButton'
import { ArrowRightIcon, FolderOpenIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative min-h-[500px]">
      <Image
        fill
        quality={50}
        placeholder={'blur'}
        blurDataURL={
          'https://res.cloudinary.com/tiyeni/image/upload/c_scale,h_678,q_auto:low/v1679808591/2X0A4983.jpg'
        }
        src="https://res.cloudinary.com/c99/image/upload/v1705326472/Placeholders/Screenshot_2024-01-15_at_15.47.02.png"
        alt="Coming Soon"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      <Container>
        <div className="relative py-40 text-white">
          <div className='font-bold text-2xl my-2'>Upcoming Event:</div>
          <div className='font-bold text-4xl my-2'>Event Name</div>
          <div className='my-2'>
            <FolderOpenIcon className="h-6" />
          </div>
        </div>
      </Container>
      <div className="relative  w-full bg-yellow-300">
        <div className="absolute left-0 bottom-0 z-0 w-full bg-yellow-300"></div>
        <Container>
          <div className="flex justify-between items-center ">
            <div className="relative flex-1">
              <div className="flex justify-between items-center">
                <div>
                  <div className='font-bold text-3xl'>Title</div>
                  <div className='font-semibold my-2'>Content</div>
                </div>
                <div className="border border-black pt-[10%]"></div>
                <div>
                  <div className='font-bold text-3xl'>Title</div>
                  <div className='font-semibold my-2'>Content</div>
                </div>
                <div className="border border-black pt-[10%]"></div>
                <div>
                  <div className='font-bold text-3xl'>Title</div>
                  <div className='font-semibold my-2'>Content</div>
                </div>
              </div>
              <div className="flex justify-end mt-8 items-end"><LargeButton>Register</LargeButton></div>
            </div>
            <div className="relative mx-12 w-[30%] pt-[25%]">
              <Image
                fill
                quality={50}
                placeholder={'blur'}
                blurDataURL={
                  'https://res.cloudinary.com/tiyeni/image/upload/c_scale,h_678,q_auto:low/v1679808591/2X0A4983.jpg'
                }
                src="https://res.cloudinary.com/c99/image/upload/v1705326472/Placeholders/Screenshot_2024-01-15_at_15.47.16.png"
                alt="Coming Soon"
                className="absolute !h-[110%] w-full object-cover !-top-[10%]"
              />
            </div>

            <div className="relative w-[25%]">
              <div >
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores accusamus enim totam distinctio, quibusdam quasi laboriosam provident, ducimus modi vero similique ipsum id possimus voluptatem non debitis corporis, excepturi quam.</div>
                <div className="flex items-center my-4"><span className='font-bold mr-2'>Read More</span><ArrowRightIcon className='h-6'/></div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Hero
