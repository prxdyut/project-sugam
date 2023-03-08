import { useRouter } from "next/router";

export default function GenerateLink(link) {
  const router = useRouter();
  
  return (
    "../".repeat(
      router.pathname.split("/").length - 3 > 0
        ? router.pathname.split("/").length - 3
        : 0
    ) + link
  );
}
