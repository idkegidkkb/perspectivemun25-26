import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

const SEO = ({ title, description, keywords }: SEOProps) => {
  const location = useLocation();

  useEffect(() => {
    // Update Title
    const fullTitle = `${title} | World Summit MUN 2026`;
    document.title = fullTitle;

    // Update Meta Description
    let descMeta = document.querySelector("meta[name='description']");
    if (!descMeta) {
      descMeta = document.createElement("meta");
      descMeta.setAttribute("name", "description");
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute("content", description);

    // Update Meta Keywords
    let keywordsMeta = document.querySelector("meta[name='keywords']");
    if (!keywordsMeta) {
      keywordsMeta = document.createElement("meta");
      keywordsMeta.setAttribute("name", "keywords");
      document.head.appendChild(keywordsMeta);
    }
    const baseKeywords = "MUN, Model United Nations, Model UN, MUN in Mumbai, Model United Nations Mumbai, World Summit MUN, WSMUN 2026, WSMUN, Mumbai MUN, Best MUN in Mumbai, College MUN Mumbai, School MUN Mumbai, Churchgate MUN, Model UN Mumbai, WSMUN '26, WSMUN 26, best MUN in India, MUN conferences, MUNs in Mumbai, youth parliament, AIPPM Mumbai, UNSC MUN, student diplomacy, public speaking competition, debate competition, global youth summit, leadership conference";
    keywordsMeta.setAttribute("content", keywords ? `${keywords}, ${baseKeywords}` : baseKeywords);

    // Update Canonical URL
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", `https://worldsummitmun.com${location.pathname}`);

    // Update Open Graph Title & Description
    let ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) {
      ogTitle.setAttribute("content", fullTitle);
    } else {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      ogTitle.setAttribute("content", fullTitle);
      document.head.appendChild(ogTitle);
    }
    
    let ogDesc = document.querySelector("meta[property='og:description']");
    if (ogDesc) {
      ogDesc.setAttribute("content", description);
    } else {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      ogDesc.setAttribute("content", description);
      document.head.appendChild(ogDesc);
    }
    
    let ogUrl = document.querySelector("meta[property='og:url']");
    if (ogUrl) {
      ogUrl.setAttribute("content", `https://worldsummitmun.com${location.pathname}`);
    } else {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      ogUrl.setAttribute("content", `https://worldsummitmun.com${location.pathname}`);
      document.head.appendChild(ogUrl);
    }
  }, [title, description, keywords, location]);

  return null;
};

export default SEO;
