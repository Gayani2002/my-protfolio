import Image from "next/image";

const SocialMedia = ({size} : {size: number}) => {
  return (

    <div className="flex justify-center gap-2 pb-4" style={{pointerEvents: 'auto'}}>
        <a className="bg-black bg-opacity-50 p-4 rounded-full hover:scale-110 scale-100"><Image src="/icons/github.svg" alt="GitHub" width={size} height={size} /></a>
        <a className="bg-black bg-opacity-50 p-4 rounded-full hover:scale-110 scale-100"><Image src="/icons/linkedin.svg" alt="LinkedIn" width={size} height={size} /></a>
        <a className="bg-black bg-opacity-50 p-4 rounded-full hover:scale-110 scale-100"><Image src="/icons/twitter.svg" alt="Twitter" width={size} height={size} /></a>
    </div>
  )

}

export default SocialMedia;
    