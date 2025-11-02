import { Box, Image } from "@chakra-ui/react";
import Avatar1 from "@/assets/cliqss-web-avatar-1.webp";
import Avatar2 from "@/assets/cliqss-web-avatar-2.webp";
import Avatar3 from "@/assets/cliqss-web-avatar-3.webp";

const Avatars = () => {
  const size = 75;

  const overlapPercentage = 0.15;
  const overlapPx = size * overlapPercentage;

  const step = size - overlapPx;
  const totalWidth = size + step * 2;

  return (
    <Box width={totalWidth} pos={"relative"} h={`${size}px`}>
      <Box
        pos={"absolute"}
        w={`${size}px`}
        h={`${size}px`}
        borderRadius={"50%"}
        top={0}
        left={0 * step}
        zIndex={2}
      >
        <Image
          width={"100%"}
          h={"100%"}
          objectFit={"cover"}
          src={Avatar1}
          alt="Avatar 1"
          loading="lazy"
        />
      </Box>
      <Box
        pos={"absolute"}
        w={`${size}px`}
        h={`${size}px`}
        borderRadius={"50%"}
        top={0}
        left={`${1 * step}px`}
      >
        <Image
          width={"100%"}
          h={"100%"}
          objectFit={"cover"}
          src={Avatar2}
          alt="Avatar 2"
          loading="lazy"
        />
      </Box>
      <Box
        pos={"absolute"}
        w={`${size}px`}
        h={`${size}px`}
        borderRadius={"50%"}
        top={0}
        left={`${2 * step}px`}
        zIndex={2}
      >
        <Image
          width={"100%"}
          h={"100%"}
          objectFit={"cover"}
          src={Avatar3}
          alt="Avatar 3"
          loading="lazy"
        />
      </Box>
    </Box>
  );
};

export default Avatars;
