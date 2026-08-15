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
    const baseKeywords = "MUN, Model United Nations, Model UN, MUNs, WSMUN, WSMUN 2026, WSMUN '26, World Summit MUN, World Summit Model United Nations, Mumbai MUN, MUN in Mumbai, Mumbai Model United Nations, Model United Nations Mumbai, best MUN in Mumbai, top MUN in Mumbai, Churchgate MUN, Mumbai MUN 2026, MUNs in Mumbai 2026, WSMUN Mumbai, college MUN Mumbai, school MUN Mumbai, university MUN Mumbai, MUN conference Mumbai, Model UN conference Mumbai, student diplomacy Mumbai, youth leadership summit Mumbai, debate competition Mumbai, public speaking Mumbai, youth summit Mumbai, best MUN in India, top MUN in India, Model United Nations India, Model UN India, Indian MUN circuit, Mumbai MUN circuit, national youth parliament, youth parliament Mumbai, AIPPM, All India Political Parties Meet, AIPPM agenda, AIPPM Mumbai, AIPPM delegate, UNSC, United Nations Security Council, UNSC agenda, UNSC Mumbai, UNGA, United Nations General Assembly, UNGA agenda, UNGA Mumbai, ECOSOC, Economic and Social Council, ECOSOC agenda, ECOSOC Mumbai, UNHRC, United Nations Human Rights Council, UNHRC agenda, UNHRC Mumbai, FIA, Fédération Internationale de l'Automobile, FIA agenda, FIA MUN, International Press, IP MUN, MUN journalism, MUN photography, MUN reporter, MUN photographer, MUN executive board, MUN chair, MUN chairperson, MUN vice chair, MUN director, MUN rapporteur, MUN secretariat, MUN organizing committee, WSMUN secretariat, WSMUN organizing committee, MUN registrations, register for MUN Mumbai, WSMUN registration, WSMUN fees, MUN portfolio matrix, MUN delegation allotment, MUN country allotment, MUN matrix allocation, WSMUN portfolio matrix, MUN study guides, MUN background guides, MUN preparation material, WSMUN study guides, WSMUN background guides, MUN rules of procedure, MUN ROP, ROP Model United Nations, MUN guidelines, MUN awards, best delegate award, high commendation award, special mention award, best reporter award, best photographer award, MUN cash prizes, WSMUN awards, WSMUN cash prizes, debate awards Mumbai, MUN conference date, WSMUN schedule, WSMUN timeline, MUN event schedule, MUN FAQs, MUN dress code, MUN indian traditionals, MUN western formals, what is MUN, how to prepare for MUN, MUN for beginners, delegate preparation MUN, public speaking tips MUN, international relations debate, global politics debate, student debate competition, high school debate Mumbai, college debate Mumbai, youth diplomacy, global affairs conference, international diplomacy summit, student leadership event, academic simulation UN, UN simulation Mumbai, United Nations simulation India, model united nations training, model un rules, model un debate style, model un procedure, model un resolution, how to write MUN resolution, MUN position paper, how to write position paper, MUN opening speech, MUN moderated caucus, MUN unmoderated caucus, MUN GSL, general speakers list MUN, point of information MUN, point of personal privilege MUN, point of order MUN, right of reply MUN, MUN motion, MUN lobby, MUN draft resolution, MUN amendment, MUN sponsors, MUN signatories, Model UN delegate guide, Model UN vocabulary, Model UN jargon, MUN terms, MUN definitions, student summit Mumbai, leadership summit Mumbai, youth development summit, international relations Mumbai, political science debate, global issues conference, world affairs debate, human rights debate India, economic systems debate, sustainable development debate, biowarfare threats debate, non proliferation debate, global security debate, UN reform debate, bilateral investment treaties debate, driver rights debate, freedom of expression motorsport, anti conversion laws debate India, constitutional guarantees India, Article 14 Indian Constitution, Article 19 Indian Constitution, Article 21 Indian Constitution, free speech media rights India, youth free speech India, education sector rights India, Indian constitution guarantees debate, Lok Sabha simulation Mumbai, Rajya Sabha simulation Mumbai, Youth Parliament simulation, MUN conference September 2026, WSMUN September 19-20, best debate event Mumbai, public speaking league Mumbai, academic MUN Mumbai, premier MUN Mumbai, prestigious MUN Mumbai, student MUN association, MUN community Mumbai, model un india list, upcoming MUNs in Mumbai, upcoming MUNs in India, WSMUN 2026 registration, World Summit MUN 2026 dates, MUN in Churchgate Mumbai, Model United Nations Churchgate, WSMUN '26 location, best academic conference Mumbai, student debate championship, global leadership forum Mumbai";
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
