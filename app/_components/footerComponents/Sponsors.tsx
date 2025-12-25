import Image from "next/image";

const Sponsors: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-5 [&>img]:md:grayscale-100 [&>a]:md:grayscale-100 z-40">
      <Image
        className="md:hover:grayscale-0"
        width={72}
        height={72}
        src="/images/bmellat.png"
        alt=""
      />
      <Image
        className="md:hover:grayscale-0"
        width={72}
        height={72}
        src="/images/khallaq.png"
        alt=""
      />
      <Image
        className="md:hover:grayscale-0"
        width={72}
        height={72}
        src="/images/melli.png"
        alt=""
      />
      <Image
        className="md:hover:grayscale-0"
        width={72}
        height={72}
        src="/images/danesh.png"
        alt=""
      />
      <Image
        className="md:hover:grayscale-0"
        width={72}
        height={72}
        src="/images/kasbokar.png"
        alt=""
      />
      <Image
        className="md:hover:grayscale-0"
        width={72}
        height={72}
        src="/images/niki.png"
        alt=""
      />
      <a
        referrerPolicy="origin"
        target="_blank"
        href="https://trustseal.enamad.ir/?id=649183&Code=JeQTf4aGmGaEGkhkxDmeDfqCvUCLDiDT"
      >
        <img
          width={72}
          height={72}
          className="md:hover:grayscale-0"
          referrerPolicy="origin"
          src="https://trustseal.enamad.ir/logo.aspx?id=649183&Code=JeQTf4aGmGaEGkhkxDmeDfqCvUCLDiDT"
          alt=""
          style={{ cursor: "pointer" }}
          data-code="JeQTf4aGmGaEGkhkxDmeDfqCvUCLDiDT"
        />
      </a>
      {/* <a referrerPolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=649183&Code=JeQTf4aGmGaEGkhkxDmeDfqCvUCLDiDT'><img referrerPolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=649183&Code=JeQTf4aGmGaEGkhkxDmeDfqCvUCLDiDT' alt='' style={{cursor:"pointer"}} data-code='JeQTf4aGmGaEGkhkxDmeDfqCvUCLDiDT' /></a> */}
    </div>
  );
};

export default Sponsors;
