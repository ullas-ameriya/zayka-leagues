import { useEffect } from "react";

type Props = {
  url: string;
};

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process?: () => void;
      };
    };
  }
}

export default function InstagramEmbed({ url }: Props) {
  useEffect(() => {
    const scriptId = "instagram-embed-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "//www.instagram.com/embed.js";
      script.async = true;

      script.onload = () => {
        window.instgrm?.Embeds?.process?.();
      };

      document.body.appendChild(script);
    } else {
      window.instgrm?.Embeds?.process?.();
    }
  }, [url]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{ margin: "0 auto" }}
    />
  );
}