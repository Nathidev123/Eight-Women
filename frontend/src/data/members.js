import NomzamoZondo from "../assets/profiles/NomzamoZondo.jpeg";
import SibongileNdashe from "../assets/profiles/SibongileNdashe.jpg";
import PhumiMtetwa from "../assets/profiles/Phumi_Mtetwa.jpg";
import KoketsoMoeti from "../assets/profiles/KoketsoMoeti.jpg";
import NomfundoMogapi from "../assets/profiles/NomfundoMogapi.jpg";
import SeadimoTlale from "../assets/profiles/SeadimoTlale.jpg";
import NabeelahMia from "../assets/profiles/NabeelahMia.jpg";
import KwezilomsoMbandazayo from "../assets/profiles/KwezilomsoMbandazayo.jpeg";

const members = [
  /*  Nomzamo Zondo,Sibongile Ndashe, Phumi Mtetwa, Koketso Moeti,Nomfundo Mogapi,Seadimo Tlale, Naabelah Mia, Kwezilomso Mbandazayo*/
  {
    id: 1,
    name: "Nomzamo Zondo",
    role: "Human Rights Attorney & Executive Director, Socio-Economic Rights Institute (SERI)",
    image: NomzamoZondo,
    bio: ` Nomzamo Zondo is a distinguished South African human rights lawyer and public interest advocate dedicated to advancing   
        constitutional rights and social justice. She serves as the Executive Director of the Socio-Economic Rights Institute of South Africa (SERI), where she 
        leads strategic litigation and advocacy aimed at protecting the rights of marginalized and vulnerable communities across the country.Throughout her career, 
        Zondo has played a pivotal role in several landmark constitutional cases that have shaped South Africa's human rights landscape. She was instrumental in the 
        successful legal challenge against the City of Johannesburg's Operation Clean Sweep, which restored the rights of thousands of informal traders to earn a living. 
        She also led litigation that resulted in the Constitutional Court declaring unconstitutional the restrictive rules governing emergency shelters, affirming the rights 
        to dignity, privacy, and family life for people facing homelessness.
        In addition, Zondo has represented communities threatened with forced evictions, advocated for the upgrading of informal settlements, and acted on behalf of the families 
        of the miners who lost their lives in the Marikana massacre, continuing to call for accountability and justice. Her work has consistently focused on securing housing rights, 
        defending livelihoods, and ensuring equal access to justice for disadvantaged South Africans.
        Recognized as one of South Africa's leading public interest lawyers, Nomzamo Zondo continues to influence constitutional jurisprudence through strategic litigation, policy advocacy
        ,and public engagement. Her commitment to equality, dignity, and socio-economic justice has made her a respected voice in the ongoing pursuit of a more just and inclusive South Africa.,`,
    videos: [
      //1mo
      {
        tile: "Legal Lifeline Ep 9 | South Africa's New Eviction Laws Explained | What the PIE Bill Really Means",
        url: "https://www.youtube.com/embed/02OkOGfRpcw?si=lSlQODEVI0i-anxF",
      },
      {
        //2mo
        title:
          "Nomzamo Zondo on South Africa's Xenophobia Crisis & Operation Dudula",
        url: "https://www.youtube.com/embed/WskZp5hvSsA?si=_XFrBktPDbQsZF74",
      },
      {
        title: "Panel discussion: How did South Africa get to June 30th?",
        url: "https://www.youtube.com/embed/Ma_Ss4_qUSU?si=5NbJ5b-WLxd7S944",
      },
      //4+
      {
        title: "CoJ intensifies crackdown on illegal CBD structures",
        url: "https://www.youtube.com/embed/aPCNJFc7fWM?si=NjBHyLsRp44sDvQn",
      },
      {
        //5mo
        title:
          "The Constitution Promises Housing… So Why Are South Africans Still Fighting Evictions?",
        url: "https://www.youtube.com/embed/NSQ1KRTPmhk?si=uG_dEEOiGcItCMPN",
      },
      {
        //1+
        title: "SERI denies working against South Africans",
        url: "https://www.youtube.com/embed/9A9W3WPnJbM?si=MyNC_z6tc5JXGI0Z",
      },
      {
        title: "Marikana 13 Years On: Families Mourn, Demand Justice",
        url: "https://www.youtube.com/embed/-nf6hCcJ42s?si=VnnhDe8fVlB7fXbv",
      },

      {
        title:
          "#POWERTalk | 13 years post Marikana massacre - Tracking the Farlam Commission’s Recommendations",
        url: "https://www.youtube.com/embed/PbHaeY2pyaA?si=EMsz9vFAqWu3GAOz",
      },
      {
        title: "Justice for Marikana, 13 years on… with Nomzamo Zondo",
        url: "https://www.youtube.com/embed/Wn_Hb6IvnQQ?si=j25L_giCB32kBzWL",
      },
      {
        title:
          "Reactions to the anti-foreign groups preventing foreign nationals from accessing health care centres",
        url: "https://www.youtube.com/embed/Xah1ITdQIWY?si=_6JLVIYMlvKfd-Gb",
      },
      //2+
      {
        title: "City shacks for Joburg fire victims - Nomzamo Zondo weighs in",
        url: "https://www.youtube.com/embed/yw4N5lmEoGk?si=QL6qYvA5XAesrYqv",
      },
      {
        title:
          "Johannesburg CBD Fire Inquiry | Nomzamo Zondo weighs in on the aftermath of the inferno",
        url: "https://www.youtube.com/embed/2RfwCLjZ6zI?si=ChQfPbxlMyLRh2jm",
      },
      {
        title:
          "Usindiso Building Fire Anniversary | Nomzamo Zondo weighs in on the matter",
        url: "https://www.youtube.com/embed/oLif8oT4CAE?si=VLUNBnz5VIPqOyZw",
      },
      {
        title:
          "Addressing the Joburg CBD building issue after yet another fire",
        url: "https://www.youtube.com/embed/4mhNyL0k4og?si=2xOCoNVCLNVWQqfX",
      },
      {
        title:
          "Makhubela’s exit will ensure Marshalltown fire inquiry is fair - Zondo",
        url: "https://www.youtube.com/embed/ufug_-slyNI?si=aIwsxtHvu7io1lqD",
      },
      {
        title:
          "Talking Point Season 3, Episode 16: 12 years on the Marikana tragedy",
        url: "https://www.youtube.com/embed/-WIPWT5JI18?si=6oezA_mwVU3mz1Jb",
      },
      {
        title:
          "Calls for government to help inner city residents in hijacked buildings",
        url: "https://www.youtube.com/embed/5Pp8S97ZHVw?si=_vbzkK-YhXJzm0m0",
      },
      {
        title: "Mtolo on Abahlali baseMjondolo's killing claims",
        url: "https://www.youtube.com/embed/a7o-5HYSC0U?si=XubnFfeytQQ3NYD-",
      },
      {
        title: "SERI demands Marshalltown fire victims' involvement at inquiry",
        url: "https://www.youtube.com/embed/z8ce8kLaPWE?si=OSGMbOZdACeQaais",
      },
      {
        title:
          "SERI disheartened by acquittal of six police officers in Marikana Massacre",
        url: "https://www.youtube.com/embed/qEXKE5C9v9s?si=_UDowrCTH-9bcFgU",
      },
      {
        title: "One year since the Usindiso building fire",
        url: "https://www.youtube.com/embed/pWYnRQ833sI?si=9fFTNZjf88YJP9U2",
      },

      {
        title: "Access to healthcare in South Africa",
        url: "https://www.youtube.com/embed/JufyVb1CuVU?si=PMdmnTk9yz8M8TtK",
      },
      {
        title: "Decades of struggle over land rights",
        url: "https://www.youtube.com/embed/9cbziDm2cjQ?si=NVQ1ELeZOTbcBJUU",
      },
      {
        title: "Court dismisses applicationto evict illegal occupants",
        url: "https://www.youtube.com/embed/_uoYVv7Hloo?si=UJH35Dkyf864v6Ke",
      },
      {
        title:
          "Court grants Cape Town permission to evict over 30 homeless people",
        url: "https://www.youtube.com/embed/mPWfC4Pz8Yc?si=X5a9iIqHA1EbpMxp",
      },
      {
        title: "City of Cape Town 20202 eviction ruled unlawful",
        url: "https://www.youtube.com/embed/nBzOwHurRag?si=__AmxRqWIwky_Ye-",
      },
      {
        title:
          "Nomzamo Zondo in the Strategic Global Meeting Climate Justice and Corporate Accountability",
        url: "https://www.youtube.com/embed/Ku5ZGE0GQJM?si=B0L0ByJjaUA-cnup",
      },
      {
        title:
          "SERI denies blocking evictions of tenants from hijacked buildings",
        url: "https://www.youtube.com/embed/kSbGyR_N_uo?si=2SA0G812TKr3BH6H",
      },
      {
        title: "Economic Opportunity of Domestic Work | Video 3",
        url: "https://www.youtube.com/embed/9b_Jfsmu08E?si=bFL0cTVlAJoStIHx",
      },
      {
        title:
          "Discussion | Marikana Massacre | 11 years since 34 miners were gunned down",
        url: "https://www.youtube.com/embed/YBOG0_k9Vcc?si=fOsUmoCwEwdv6KuJ",
      },
      //3 years +
      {
        title: "Joburg fire a wake-up call for city's leadership",
        url: "https://www.youtube.com/embed/0VMcCPp3fqI?si=nKUdBC38EEKzf0jA",
      },
      {
        title:
          "Assessing the Impact of Social Rights Litigation in South Africa: With Particular Reference to Constitutional Court Jurisprudence",
        url: "https://www.youtube.com/embed/dfS2xWgs7Oc?si=G40jZIvR8IKTAcHv",
      },
      {
        title:
          "PRESS CONFERENCE | IEJ and #PTG go to court to challenge unfair exclusion of millions from SRD grant",
        url: "https://www.youtube.com/embed/bi0YNQtMD-c?si=NRPyoPOvSaldZXbQ",
      },
      {
        title:
          "Marikana Massacre | Discussion | More than R300m paid out in claims",
        url: "https://www.youtube.com/embed/w035VufTS8Y?si=1-2cFVVVNJXPQe4Y",
      },
      {
        title: "SERI director reflects on decades of social justice in SA",
        url: "https://www.youtube.com/embed/Qa27RDZunNo?si=nbulb9IsK_HB9-WK",
      },
      {
        title: "Unfiltered | Will Marikana victims ever receive justice?",
        url: "https://www.youtube.com/embed/iz-NMovWTFQ?si=CB-1DpQxbTud92rY",
      },
      {
        title: "Marikana 10 Years On: The Future of Marikana",
        url: "https://www.youtube.com/embed/apcsnlgg_to?si=3aKKUJWZV8gP-c-U",
      },
      {
        title: "Operation Dudula dragged to court",
        url: "https://www.youtube.com/embed/5yId6ozinDQ?si=OlylHoyXUpXqT0UL",
      },
      {
        title: "Nomzamo Zondo | Executive Director's Message",
        url: "https://www.youtube.com/embed/hjNnTa2Ia7g?si=eFI7nbH83YckiGbu",
      },
      {
        title:
          "Nomzamo Zondo commemorates and reflects on the Marikana Massacre",
        url: "https://www.youtube.com/embed/liI7LTzvvyE?si=hO9hRj8uxtMDmdh3",
      },
      {
        title:
          "SERI expresses concern about lack of prosecutions in the Marikana massacre: Nomzamo Zondo",
        url: "https://www.youtube.com/embed/wn4I35bxjLc?si=nG0vQNza5KD1hRu8",
      },

      {
        title:
          "Episode 1: Understanding the Abandoned/Hijacked Buildings in Johannesburg Inner City - with SERI.",
        url: "https://www.youtube.com/embed/UXZVjVOvzK4?si=q-Zor_8Mwhdb7qwp",
      },
      {
        title:
          "Nomzamo Zondo weighs in on Dr. Aaron Motsoaledi's words against the Helen Suzman Foundation",
        url: "https://www.youtube.com/embed/A4-4Tfwrwkk?si=4JHt3X3gX_6IjUTm",
      },
      {
        title: "Ubomi Bethu, Nemizamo Yethu: With Nomzamo Zondo",
        url: "https://www.youtube.com/embed/t0Q77kAReK8?si=h5Q2TbDp-jnUZLcS",
      },
      {
        title: "Was Zuma's arrest the only trigger for July 2021 arrest?",
        url: "https://www.youtube.com/embed/HCATSV3cKtI?si=LyHRO5JWHxDrlzAa",
      },
      {
        title:
          "Live | Remembering Marikana MarikanaMassacre with Nomzamo Zondo.",
        url: "https://www.youtube.com/embed/E6i29qMojgM?si=doSVofu1xS_k7fSo",
      },
      {
        title: "Public Seminar: Marikana - 10 years on",
        url: "https://www.youtube.com/embed/chPAZs0i4Fk?si=UntEMzLjT7DF-w8a",
      },
      {
        title:
          "ConCourt rules against awarding damages for 'socio-economic rights",
        url: "https://www.youtube.com/embed/BFfIuWrSkxk?si=W2F19d5oLIC7-VaB",
      },

      {
        title: "Sanitary pads added to zero-rated items",
        url: "https://www.youtube.com/embed/ZfWvY2VGlUg?si=YVpZNr0Ep5rARelo",
      },
      {
        title:
          "Marikana Massacre | Most of the Farlam Commission recommendations not implemented: SERI",
        url: "https://www.youtube.com/embed/x5_XvWhLIaw?si=-I70FVCQwp9r85Dy",
      },
      {
        title: "Justice for #MarikanaMassacre victims, nine years on.",
        url: "https://www.youtube.com/embed/g8M8-YBxZy4?si=5Md-gdNgwF8cANA0",
      },
      {
        title:
          "Reckoning with the Riots’: A documentary on the July 2021 unrest",
        url: "https://www.youtube.com/embed/awWCng1sCgE?si=XzBh29Te1mSWFtAK",
      },
      {
        //4+
        title:
          "SERI accuses City of Johannesburg councilor Nkululeko Mbundu of inciting violence against its staff",
        url: "https://www.youtube.com/embed/kPV8nCVjVIE?si=17RXDqVKsB6rRptk",
      },
      {
        title:
          "Winnie Mandela Informal Settlement residents have waited more than 20 years for RDP houses",
        url: "https://www.youtube.com/embed/MnKSFwsEZ10?si=Qbz-7X_68gU2B1jp",
      },
      {
        title:
          "DISCUSSION | Efforts to curb the involvement of foreigners in the informal sector",
        url: "https://www.youtube.com/embed/beoRBuquErM?si=LHlpL03U47oXg7wf",
      },
      {
        title: "The State of the Judiciary in South Africa",
        url: "https://www.youtube.com/embed/gw8HP6iOBWI?si=Dz930SXG8OI4bylN",
      },
      {
        title: "SANEF IAJ Panel: Covering Commissions",
        url: "https://www.youtube.com/embed/SeTpDyR0rIQ?si=909wAItF7VUg2Oy0",
      },
      //5 years +
      {
        title: "The Bottom Line, 31 March 2021",
        url: "https://www.youtube.com/embed/NDksCA0Q0A0?si=E2MIUgTK6d5mpOOC",
      },
      {
        title:
          "Marikana Massacre | Pandelani: Offer of an extra R500,000 for each family rejected",
        url: "https://www.youtube.com/embed/46PbPBKR76w?si=WH60spmkrmL0oZhm",
      },
      {
        title: "Marikana massacre | Call for 16 August to be public holiday",
        url: "https://www.youtube.com/embed/fhZhMDr0PGs?si=SYcS7iqxLg-7j8F1",
      },
      {
        title:
          "Has there been little progress made in prosecuting and holding individuals for Marikana massacre?",
        url: "https://www.youtube.com/embed/7X5CsO-NoFQ?si=TUpVPWd1_bNlUaXS",
      },
      {
        title:
          "Wits Protest | Nomzamo Zondo, executive director at Socio Economic Rights on the Wits protest",
        url: "https://www.youtube.com/embed/2pYQqkSijCU?si=4FOfQk9K8TGda0nz",
      },
      {
        title:
          "NPA confident about its case against six individuals over Marikana Massacre",
        url: "https://www.youtube.com/embed/sJGZ5-pyLpg?si=eHbxgHW-kvqNx4Ip",
      },
      {
        title:
          "The Socio Economic Rights Institute has condemned SAPS for unlawful use of force",
        url: "https://www.youtube.com/embed/KSrefxX2lhY?si=H_mQ1FiCigyJrmiV",
      },

      {
        title:
          "Nomzamo Zondo, SERI's Executive Director joins Thabo Mdluli in studio",
        url: "https://www.youtube.com/embed/-FnflcfM4Tg?si=oTbUBfSt65q2jBVM",
      },
      {
        title: "Nomzamo Zondo on the ISS Marikana report",
        url: "https://www.youtube.com/embed/qN5cwiB8SYc?si=AFCJPMrKeIOscgKk",
      },
      {
        title:
          "Nomzamo Zondo discusses Pan-African reflections on leadership and good governanceduring COVID-19",
        url: "https://www.youtube.com/embed/wBu7AX6OoAA?si=q5I0pAEYrQ1no_HK",
      },
      {
        title: "Informal traders | Joburg MMC accused of incitement",
        url: "https://www.youtube.com/embed/PJkJV7LvNzo?si=tI3rruxcaGEBtMQQ",
      },
      {
        title:
          "Poor black communities have been unfairly targeted by police - SERI",
        url: "https://www.youtube.com/embed/2ELelbo-8lY?si=Pj64KSYJHhGZyu9z",
      },
      {
        title: "8th commemoration of the Marikana Masaccre | SERI reacts",
        url: "https://www.youtube.com/embed/7yBkf87UrgI?si=hnb31v4YAUnS7JVX",
      },
      //6+
      {
        title: "Covid-19: What is a state of disaster?",
        url: "https://www.youtube.com/embed/2nZGzbu_MLI?si=0fv7igRiogN0lR-D",
      },
      {
        title: "Unfiltered, 07 October 2019",
        url: "https://www.youtube.com/embed/pVNuU5b6ioc?si=s5uH9REw-eM6cgHR",
      },
      {
        title:
          "Representative of 36 families who were affected by Marikana massacre speaks to us",
        url: "https://www.youtube.com/embed/7ijf2XmXGxY?si=Zi_6FURSEIxHznY5",
      },
      {
        title:
          "Marikana massacre | Families want Farlam Commission recommendations implemented",
        url: "https://www.youtube.com/embed/3a45PzmKS-s?si=x-7A_U2-Cs2Rkxfu",
      },
      {
        title: "Nomzamo Zondo - Lessons from Litigating 'Operation Clean Sweep",
        url: "https://www.youtube.com/embed/SbtQbZ91Fac?si=1wfbbzm4Imx2bsU5",
      },
      {
        title: "Dangerous buildings in the JHB CBD under the spotlight",
        url: "https://www.youtube.com/embed/TlfjRKFzXAM?si=-WuKlo8rlzVNB_0h",
      },
      {
        title: "The Mines, the Police, the State: What Happened at Marikana",
        url: "https://www.youtube.com/embed/wxDDXB7ijYs?si=JhUAC29BjZy6qG3B",
      },
    ],
    //update contact info
    email: "nomzamozondo@gmail.com",
    phone: "085 555 5555",
  },

  {
    id: 2,
    name: "Sibongile Ndashe",
    role: "Human Rights Lawyer & Executive Director, Initiative for Strategic Litigation in Africa (ISLA)",
    image: SibongileNdashe,
    bio: `

        Sibongile Ndashe is a distinguished South African human rights lawyer, feminist advocate, and strategic litigator committed to advancing women's rights, 
        gender equality, and social justice across Africa. She is the Founder and Executive Director of the Initiative for Strategic Litigation in Africa (ISLA), 
        a Pan-African organization established in 2014 to strengthen strategic human rights litigation and improve access to justice throughout the continent.
        With more than two decades of experience in public interest law, Ndashe has held key legal positions at the Legal Resources Centre, the Constitutional 
        Court of South Africa, the Women's Legal Centre, and Interights, where she led regional litigation on human rights, equality, and discrimination before 
        African human rights institutions. Her work has focused on developing legal protections for women and people whose rights are violated on the basis of 
        gender identity, gender expression, and sexual orientation.
        Among her most notable contributions is the founding of ISLA, through which she has helped build a continent-wide network of lawyers using strategic 
        litigation to advance women's human rights and establish transformative legal precedents. She also helped establish the African LGBTI Rights Lawyers 
        Network (ALRILaN), providing legal support to advocates working on landmark cases involving equality and non-discrimination before domestic and regional 
        courts. In 2017, Ndashe gained international recognition after being detained in Tanzania while participating in a legal workshop focused on access to HIV 
        services and human rights, highlighting the challenges faced by human rights defenders across Africa.
        Recognized as one of Africa's leading public interest lawyers, Sibongile Ndashe continues to shape human rights jurisprudence through strategic litigation,
        legal capacity building, and policy advocacy. Her work has strengthened protections for women, marginalized communities, and vulnerable groups while
        advancing equality, dignity, and justice across the African continent.`,

    videos: [
      {
        title:
          "Understading the AU Convention on Violence Against Women and Girls",
        url: "https://www.youtube.com/embed/Znhop7KqTcM?si=Nq-HeBqccZQXXwgj",
      },
      {
        title: "PAP PROTEST",
        url: "https://www.youtube.com/embed/0ARemxbDxpg?si=KkHaQu1-ODyvTrgu",
      },
      {
        title: "ConCourt to hear arguments on consent in sexual offences",
        url: "https://www.youtube.com/embed/U7ygjGhVyis?si=y8OtENGOSNoLyCJL",
      },
      {
        title: "Who Protects Women When the Law Fails? | Difference She Makes",
        url: "https://www.youtube.com/embed/DrjkXvbQU98?si=qtLLZzaL8fuh9iVo",
      },
      {
        title: "Emojis in the spotlight at Mbenenge tribunal",
        url: "https://www.youtube.com/embed/c5nV69EokfY?si=zpy6K-cPOUBbBSFN",
      },
      {
        title:
          "Fighting for Justice Beyond the Courtroom | Sibongile Ndashe | ISLA",
        url: "https://www.youtube.com/embed/gEIZXEU_jv4?si=Sz3oDSw5KOelGcI9",
      },

      //6 months +
      {
        title:
          "Civil society warns: too few GBV shelters as SA marks 16 days of activism",
        url: "https://www.youtube.com/embed/Gb7-cq-g-Go?si=oDH1ANXgVgxPya3I",
      },
      {
        title: "Sign antenuptial contract before lobola - Ndashe",
        url: "https://www.youtube.com/embed/EsLvx3pwAKs?si=1IR7QWblB_kOw2_D",
      },
      {
        title:
          "State Accountability on Gender-Based Violence in Africa | #AfricanDiaries",
        url: "https://www.youtube.com/embed/b_aYVjP6mLk?si=Q6jSgKiWK5qerOuF",
      },
      {
        title: "Be Gentle With Yourself But Stay Unwavering | Mid Week Tease",
        url: "https://www.youtube.com/embed/mauwxCKcPC0?si=osHEp8Q74QoYdun7",
      },
      //1year+
      {
        title: "Alarming rise in missing children cases in South Africa",
        url: "https://www.youtube.com/embed/no6PfcatUjM?si=YvOINtku1Wok6c0A",
      },
      {
        title: "National Council on GBV and Femicide bill is toothless",
        url: "https://www.youtube.com/embed/ouCS6gOqw0k?si=JbhWfFPNJ7XBlBn9",
      },
      {
        title: "Violence and harassment in the workplace",
        url: "https://www.youtube.com/embed/3ak_Y2DQpn8?si=xL4A-b691diykVwl",
      },
      {
        title: "Judicial conduct tribunal hearing resumes tomorrow",
        url: "https://www.youtube.com/embed/C4Og02LYl2c?si=XOCOes53zZWLX90L",
      },
      {
        title: "South African society accepts GBV - Ndashe",
        url: "https://www.youtube.com/embed/tqrbIcSxd_U?si=79830xCDF9V07NU6",
      },
      {
        title: "Steering Committee member Sibongile Ndashe",
        url: "https://www.youtube.com/embed/Q951WRNxjRM?si=yGaA7rYrI3YeiZbu",
      },
      {
        title: "Eastern Cape battles teenage pregnancy",
        url: "https://www.youtube.com/embed/CCf1shJry4o?si=dZ2gR6mQ4nIJ-AqC",
      },
      {
        title: "Mixed reactions to NPA's decision on minor's alleged rape case",
        url: "https://www.youtube.com/embed/0-nQwboa_y4?si=ZNRRYri9YSTCQcr_",
      },
      {
        title: "Court to hear Divorce Act matter",
        url: "https://www.youtube.com/embed/zG625JrAKfA?si=8v3npeIFuVTVbzOU",
      },
      {
        title: "Gender-based violence a real challenge in SA",
        url: "https://www.youtube.com/embed/zwFv0aeIr9I?si=iiYXbpcnPkhDXq2V",
      },
      {
        title: "State accountable for failure to convict Omotoso",
        url: "https://www.youtube.com/embed/FzBKp9RsYEE?si=WZI6kHmVFeQsd2uy",
      },
      {
        title:
          "Woman Drag Cyril Ramaphosa To Court; South African Wake Up To An Unpleasant News This Morning",
        url: "https://www.youtube.com/embed/gy00bbmtQbU?si=8taA71ej7_-yXCei",
      },
      {
        title: "Debate around interpretation of power in workplaces",
        url: "https://www.youtube.com/embed/JnUBSCCuO6Q?si=Dw5HCsERRd6U6waS",
      },
      {
        title:
          "Crime in Mpumalanga | Five bodies discovered in a week: Sibongile Ndashe",
        url: "https://www.youtube.com/embed/FJq2Ww2uYqc?si=5zwXP2mLksPxkhjo",
      },
      {
        title:
          "Council on GBV and Femicide calls for prioritising of gender-based violence",
        url: "https://www.youtube.com/embed/94_KWW8Svyw?si=nRZdY3hXG2K87u1o",
      },
      {
        title: "Outrage after Olorato Mongale's murder",
        url: "https://www.youtube.com/embed/PLU3sqrGRoo?si=kRXv8r8-OosndL3A",
      },
      {
        title: "Gender-based violence concerns in South Africa",
        url: "https://www.youtube.com/embed/NgAHjtpuWqk?si=hfccwda4sK8vDw2V",
      },
      {
        title: "#10 DEMOCRACIAS EN DISPUTA/DEMOCRACIES IN DISPUTE: AFRICA",
        url: "https://www.youtube.com/embed/X4nJ8LPV4KA?si=xNskS_WZzhV9mfQH",
      },
      {
        title:
          "Movement Beyond Borders: What we can learn from South Africa’s Case at the ICJ - M4BL + Global Black",
        url: "https://www.youtube.com/embed/EbBf4NvgrnQ?si=CXsYAAaPM-f7yH30",
      },
      {
        title:
          "EC Education Department issues notice to deregister Bergview College",
        url: "https://www.youtube.com/embed/vBJoh82dXNs?si=NNhX3yYipblcURX0",
      },
      {
        title: "Mixed reactions to Oscar Pistorius' release on parole",
        url: "https://www.youtube.com/embed/iKeOyW9yyAE?si=23k_1uTEcPKgsfZT",
      },
      //3  years +
      {
        title: "Ramaphosa requests second GBVF summit amid criticism",
        url: "https://www.youtube.com/embed/vTvfVPVox6c?si=dWsva2co4pVyCwmB",
      },
      {
        title: "16 Days of Activism for No Violence against Women and Children",
        url: "https://www.youtube.com/embed/xf6Bz8QKqMk?si=6ComBqboyRWSFmqI",
      },
      {
        title:
          "Finding Courage and Healing Trauma as We Stand for Human Rights with Sibongile Ndashe of ISLA",
        url: "https://www.youtube.com/embed/hQTVJOC-jWI?si=0Zo6vB-ErkwgbWjY",
      },

      {
        title:
          "Equal rights means not being attacked ft Sibongile Ndashe, Initiative for Strategic Litigation",
        url: "https://www.youtube.com/embed/BMF75CaeEX4?si=zRI4NjJb7kxnD8MT",
      },
      {
        title:
          "(Audio Described) Change for LGBTQ+ people in South Africa, ft Sibongile Ndashe, human rights lawyer",
        url: "https://www.youtube.com/embed/PQj1PaQDqDg?si=eP-R_Hnw_q_aX2LX",
      },

      {
        title:
          "Change for LGBT people in South Africa ft Sibongile Ndashe, founder and human rights lawyer",
        url: "https://www.youtube.com/embed/YepYJqoovGA?si=Km3dCwJQB6zhpJrg",
      },
      {
        title:
          "What is the National Strategic Plan on Gender-Based Violence and Femicide?",
        url: "https://www.youtube.com/embed/l6xfAk4oGl8?si=uF5utIWq8BIsV0Mr",
      },
      {
        title:
          "Feminist Legal Gains and Setbacks: From the Zuma Rape Trial to the Coko Judgement",
        url: "https://www.youtube.com/embed/FFl3Xic9gyM?si=k-tIBMyxCJkq09ps",
      },
      {
        title: "Women’s Platform Members Meeting",
        url: "https://www.youtube.com/embed/tex75hLfuXU?si=_P1DkOu1-NLSdKwH",
      },
      {
        title:
          "Using Regional and International Mechanisms to Advance SOGIE Litigation?",
        url: "https://www.youtube.com/embed/VZAXSblkihc?si=Sj6CRm1mtUbyomfO",
      },
      {
        title:
          "frica Human Rights Day 2021 / Journée des Droits de l’Homme en Afrique 2021",
        url: "https://www.youtube.com/embed/RT99LvgC-AI?si=QXJiCtXdpOx4LkG4",
      },
      {
        title: "Litigants Forum Members Meeting",
        url: "https://www.youtube.com/embed/qENYh4m4XNs?si=4w_RSmcEOrQOkC09",
      },
      {
        title:
          "All Eyes on Latin America: Anti-Gender Politics Through Transnational Lenses",
        url: "https://www.youtube.com/embed/JQNHyEHPY_U?si=hT20P-TSc-49MnZl",
      },
      {
        title: "Week 3 Chapter Five: Institutional & Operational Arrangements",
        url: "https://www.youtube.com/embed/MUQMwYxpZo0?si=AxGMN_C5Nbdb5Nvs",
      },
      {
        title: "The Book Stokvel Charlotte Maxeke Webinar",
        url: "https://www.youtube.com/embed/od7XNbZ4EwQ?si=T_ShkV640qUqj4ty",
      },
      {
        title: "ISLA Conversations with Dr. Ruth Nekura",
        url: "https://www.youtube.com/embed/oYQF0WQ7siY?si=YtoVMptKonXmRL_A",
      },
      {
        title:
          "Civil society reflections on the Rules of Procedure 2020 of the African Commission",
        url: "https://www.youtube.com/embed/AiEwP4vNPdA?si=TYRnRVk4vLT4yeVu",
      },
      {
        title:
          "Realizing and Revising Intersectionality Across Space and Place Local and Global Narratives",
        url: "https://www.youtube.com/embed/Pwvg7qbmAuM?si=7qPn2mrXekZISZ6f",
      },
    ],
    email: "sibongilendashe@gmail.com",
    phone: "082 222 3333",
  },
  {
    id: 3,
    name: "Phumi Mtetwa",
    role: "Human Rights Activist",
    image: PhumiMtetwa,
    bio: `Phumi Mtetwa – Biography

        Phumi Mtetwa is a distinguished South African feminist, human rights activist, and social justice leader whose career spans more than four decades. A veteran of the anti-apartheid movement, she has dedicated her life to advancing gender equality, LGBTQI+ rights, economic justice, and grassroots activism across South Africa and the African continent. She serves as the Regional Co-Director of JASS (Just Associates) Southern Africa, where she works to strengthen feminist movements and support community-led advocacy for social change.

        Mtetwa began her activism in the 1980s as part of the anti-apartheid struggle, organizing community campaigns and rent boycotts that challenged systemic injustice. She later became a pioneering advocate for LGBTQI+ rights, co-founding the National Coalition for Gay and Lesbian Equality (NCGLE), which played a central role in securing constitutional protection against discrimination based on sexual orientation in South Africa's democratic Constitution. Her leadership has also extended internationally through her service as Co-Secretary General of the International Lesbian and Gay Association (ILGA), where she championed the rights of LGBTQI+ communities across the Global South.

        Among her most notable contributions are her work with the Lesbian and Gay Equality Project, the AIDS Law Project, the Treatment Action Campaign, and the Masithandane End-Hate Collective, where she has advanced equality, public health, and human rights. Through JASS Southern Africa, she continues to empower women leaders, strengthen grassroots organizations, and build feminist movements committed to dismantling inequality and promoting social justice throughout the region.

        Recognized as one of South Africa's pioneering feminist and human rights advocates, Phumi Mtetwa has made a lasting contribution to the advancement of constitutional democracy, equality, and inclusive social transformation. Her unwavering commitment to justice continues to inspire activists and communities working toward a more equitable and compassionate society.
`,
    videos: [
      {
        title:
          "Seizing the Moment: The politics of now and the path ahead for movements",
        url: "https://www.youtube.com/embed/lc48Oqz6W8k?si=cuz9vc73pWVaG10a",
      },
      {
        title: "Crossing The Line: A Reflection on JASS at AWID Forum 2024",
        url: "https://www.youtube.com/embed/ty04OXsBjto?si=c-kofz3jXBhAcmnW",
      },
      {
        title:
          "No Going Back on Gender Justice: Organizing Against Anti-Gender Rights Backlash",
        url: "https://www.youtube.com/embed/fFVCj5gyRXE?si=inSeDNtED4OHQAt_",
      },
      //4+
      {
        title: "Pride and Palestine",
        url: "https://www.youtube.com/embed/oNdy7fES2xU?si=kTPERVfOE8O-VNTB",
      },
    ],
    email: "phumimtetwa@gmail.com",
    phone: "083 111 4444",
  },

  {
    id: 4,
    name: "Koketso Moeti",
    role: "Civic Activist and Social Justice Advocate",
    image: KoketsoMoeti,
    bio: `Koketso Moeti – Biography

        Koketso Moeti is a distinguished South African civic activist, democracy advocate, and social justice leader committed to empowering citizens to influence public policy and hold institutions accountable. She is the Founding Executive Director of amandla.mobi, a people-powered movement that uses digital technology and grassroots organizing to advance social justice and strengthen participatory democracy across South Africa.

        Since founding amandla.mobi in 2014, Moeti has led nationwide campaigns addressing issues such as gender-based violence, affordable data access, healthcare, social grants, food security, housing rights, and government accountability. Through innovative mobile and digital campaigning, she has helped mobilize hundreds of thousands of South Africans—particularly low-income Black women—to advocate for policies that promote equality, dignity, and economic justice.

        Among her most notable achievements is the establishment of amandla.mobi as one of South Africa's leading civic engagement platforms, enabling citizens to organize collective action through accessible digital tools. Under her leadership, the organization successfully campaigned for the government to fully subsidize digital television migration for low-income households, ensuring vulnerable communities retained access to essential information and public broadcasting. Her work has also influenced national conversations on transparency, corporate accountability, and democratic participation.

        Moeti's leadership has earned international recognition, including selection as an Obama Foundation Fellow, an Atlantic Fellow for Racial Equity, a Keseb Democracy Fellow, and a Charles F. Kettering Global Fellow. She has also served as an expert advisor to the World Economic Forum on civil society engagement and as a board member of WITNESS, contributing to global efforts to strengthen democracy and human rights.

        Recognized as one of South Africa's leading voices in civic activism, Koketso Moeti continues to champion inclusive democracy, social justice, and citizen-led change. Her work has transformed the way ordinary people engage with public institutions, demonstrating the power of collective action to create a more just and equitable society.
`,
    videos: [
      {
        title:
          "Serious hunger and food security crisis in SA | Is government doing enough?",
        url: "https://www.youtube.com/embed/H_c1in8R0gw?si=1dlrxsIfX5MDAF0H",
      },
      {
        //2mo
        title:
          "Majority of us are horrified when we hear reports of women being forced to give birth on pavements",
        url: "https://www.youtube.com/embed/pDqqSBUYg6k?si=UC17YhHp0pMAOnnk",
      },
      {
        //7mo
        title:
          "Kerry Washington: Democracy On The Screen - And On The Line Panel",
        url: "https://www.youtube.com/embed/W-8Wo6SWAcI?si=AsX7Sh91_BjObjxF",
      },
      {
        title:
          "Urban Crisis Seminar: Strategising for Improved Social Justice Communication",
        url: "https://www.youtube.com/embed/Py4E2YK10pE?si=ovPDr_upaNWUJSuq",
      },
      {
        //1+
        title:
          "[PART 1] - Roundtable Discussion: Immigration, Policing & South Africa's Future Politics",
        url: "https://www.youtube.com/embed/ZyL980c7K-k?si=zocEZOE4wqgMfNqW",
      },
      {
        title: "Building Inclusive Democracy",
        url: "https://www.youtube.com/embed/veXsBRkmrWk?si=cD5tmkYNXfNlSkd1",
      },
      {
        title: "30 Years of Democracy - Day 2 - Constitution Hill",
        url: "https://www.youtube.com/embed/Yf9RDxGj76w?si=CoJdvMDG-Zni3E1i",
      },
      {
        title:
          "[PART 2] - Roundtable Discussion: Immigration, Policing & South Africa's Future Politics",
        url: "https://www.youtube.com/embed/bS-ePHKx8uM?si=voXwyNoO_rCrNrIN",
      },
      {
        title: "Lunchtime Symposium: Bending the Arc of Democracy",
        url: "https://www.youtube.com/embed/czqcrSR5RoM?si=l5-ceqmFsgQ0-cGC",
      },
      {
        //3+
        title:
          "Civil group Amandla.Mobi fights alleged collusion between business and government: Koketso Moeti",
        url: "https://www.youtube.com/embed/WCPaVQXYipo?si=vYMNI3uXqUycaeor",
      },
      {
        title:
          "Marikana: 12 years of disruption, loss and denial since 2012 #JusticeForMarikana",
        url: "https://www.youtube.com/embed/aHcuc93bOPQ?si=YQGF_WK1uDTHkXGi",
      },
      {
        title:
          "Black lesbians and transgender men in South African townships face discrimination and violence",
        url: "https://www.youtube.com/embed/mtRTp7yAU18?si=Vumm1mqJlyWmfMAn",
      },
      {
        title:
          "Meet the South African Activist who started a nationwide movement with just a cell phone",
        url: "https://www.youtube.com/embed/0IvayOCHfW0?si=8y1sq6ShTQuriqZZ",
      },

      {
        title:
          "[BOOK LAUNCH] Human Rights and The Transformation of Property by Stuart Wilson",
        url: "https://www.youtube.com/embed/Aq6GIK9Zwr8?si=83fDKD8NeZ3jX_Yc",
      },
      //4+
      {
        title: "Conversation Lab - Awakening SA s Youth Voice",
        url: "https://www.youtube.com/embed/zL4fnxs689Y?si=AQJPR4nRotAtiRc_",
      },
      {
        title: "South Africa gears up for Women's Day",
        url: "https://www.youtube.com/embed/hAw34KIBo3A?si=7BvYL93M-j8OBw7X",
      },
      {
        title: "Marikana massacre | Conditions still the same on the ground",
        url: "https://www.youtube.com/embed/_U3Vp2yxjJ0?si=4TQZmcVt2ypv2fYd",
      },
      {
        title:
          "02 Loneliness, defence, confusion - affective dynamics in the digital public sphere",
        url: "https://www.youtube.com/embed/YQZhALPgu6Y?si=zFvhCdPtyVFhC5UA",
      },
      {
        title:
          "02 Soledad, defensa, confusión: dinámicas afectivas en la esfera pública digital",
        url: "https://www.youtube.com/embed/5_dcicUdVy8?si=CRMXUAEz3C_oqB-o",
      },
      {
        title: "Building a just and people-powered movement – Koketso Moeti",
        url: "https://www.youtube.com/embed/IoRTeeY5OTo?si=KKHCHm_MR5_gzbW5",
      },
      {
        //5+
        title:
          "South Africa's Youth Voice: Prof Mamokgethi Phakeng, Shaeera Kalla & Koketso Moeti (Panel)",
        url: "https://www.youtube.com/embed/5iGO0xtteBA?si=9EQHNxqyrYDabVVU",
      },
      {
        title: "Social Justice Initiative: Women in Social Justice",
        url: "https://www.youtube.com/embed/FI35KR5S1gc?si=1qXz4LfhKhoesiKj",
      },
      {
        title: "Koketso Moeti: Women in Social Justice Ep. 07",
        url: "https://www.youtube.com/embed/csDkiM-qtqs?si=JLr5GsehZ7XNKKTQ",
      },
      {
        title:
          "Rethinking Africa 2020 | Independence begins with self-image and the image of others | Koketso Moeti",
        url: "https://www.youtube.com/embed/xLdsQnIYCCk?si=HuNSEQcj8iu1voP7",
      },
      {
        title: "DISCUSSION: Marikana Massacre remembered",
        url: "https://www.youtube.com/embed/AN_GCN2D0mI?si=jBoocdqBnlSslOS0",
      },
      {
        //6+
        title:
          "Koketso Moeti of Amandla.Mobi joins Black Women Disrupt Summer Series Live",
        url: "https://www.youtube.com/embed/ewBJt1KU7Ys?si=WOwK19uDce5Y2xCL",
      },
      {
        title: "Coronavignette: Koketso Moeti",
        url: "https://www.youtube.com/embed/JRP6ex-hB00?si=k-hCnb2TRU9GMh9F",
      },
      {
        title:
          "MAINTAINING A SAFE HUMAN CONNECTION | Afternoon Express | 13 August 2020",
        url: "https://www.youtube.com/embed/aFjpLDV7QW8?si=4Xe4dKyX215n9F3B",
      },
      {
        title:
          "Mobile operators instructed to reduce data prices: Koketso Moeti",
        url: "https://www.youtube.com/embed/8ToAQ7EFOmQ?si=z0KbEDosvGOebcJ2",
      },
      {
        title: "Amandla.mobi recognised",
        url: "https://www.youtube.com/embed/h36Zo205Bz0?si=mlz_Ewqgy6yHb1qu",
      },
      {
        //7+
        title: "#HowTo Build Campaigns that Change Lives with Koketso Moeti",
        url: "https://www.youtube.com/embed/yY0oyJs1zSg?si=EgxWJJEq_1YPwJU3",
      },
      {
        title: "Accepting the Waislitz Global Citizen award",
        url: "https://www.youtube.com/embed/iuO1tXsdD-M?si=J6n7vb1Dwn5Dggyx",
      },
      {
        //8+
        title: "UNFILTERED: Lets Have it Out - Part One",
        url: "https://www.youtube.com/embed/d8bZrr4996w?si=TFluG6o7Ag4TZ6Zg",
      },
      {
        title: "ACCESSIBLE: Lets Have it Out - Part Three",
        url: "https://www.youtube.com/embed/D0HfTMGhfqA?si=4tdrddM2R2c9z7kW",
      },
      //9 years
      {
        title:
          "amandla.mobi Founder Koketso Moeti interviewed on Maggs on Media",
        url: "https://www.youtube.com/embed/MHee7G8Vufo?si=KfG4F6C8rh3Y9EQr",
      },
      {
        title: "South Africa: What Role for the Civil Society?",
        url: "https://www.youtube.com/embed/VkdjR0RvFmA?si=Wmob_6AbENP3yYf5",
      },
      {
        title:
          "Interview: amandla.mobi founder, Koketso Moeti speaks to Tim Modise",
        url: "https://www.youtube.com/embed/na3STALTyyU?si=Ud3eli1RVlOaA-T7",
      },
      {
        //10+
        title:
          "Tonight with Tim Modise | Koketso Moeti, Founder & Director of Amandla.mob",
        url: "https://www.youtube.com/embed/WB0D6KG6IJQ?si=pZMdDA_QJdyKPHE1",
      },
      //10years +
      {
        title: "Interview with Koketso Moeti",
        url: "https://www.youtube.com/embed/1Xo81eH6Us4?si=L7hs3tik4CjWUWPy",
      },
    ],
    email: "koketsomoeti@gmail.com",
    phone: "084 555 6666",
  },

  {
    id: 5,
    name: "Nomfundo Mogapi",
    role: "Clinical Psychologist and Mental Wellness Advocate",
    image: NomfundoMogapi,
    bio: `

        Nomfundo Mogapi is a South African clinical psychologist, mental wellness leader, and human rights advocate dedicated to promoting healing, resilience, and psychosocial well-being. She is the Founder and Chief Executive Officer of the Centre for Mental Wellness and Leadership (CMWL), where she works to integrate mental wellness into leadership, governance, peacebuilding, and community development across Africa.

        With more than two decades of experience, Mogapi has been at the forefront of advancing trauma-informed approaches to leadership and social justice. Prior to founding CMWL, she served as the Executive Director of the Centre for the Study of Violence and Reconciliation (CSVR), leading initiatives focused on trauma recovery, gender-based violence prevention, transitional justice, and peacebuilding. Her work has supported individuals, communities, and institutions affected by conflict, violence, and historical injustice throughout the continent.

        Among her most notable contributions is the establishment of the Centre for Mental Wellness and Leadership, which equips leaders and organizations with the tools to address trauma and promote psychological well-being in decision-making and public service. She has also played a significant role in shaping regional human rights policy, contributing to the African Union Transitional Justice Policy and the African Commission on Human and Peoples' Rights General Comment on Redress for Victims of Torture. Through her research, advocacy, and advisory work, she has championed trauma-informed responses to gender-based violence, collective violence, and community healing.

        A respected leader in the fields of mental health, leadership, and human rights, Nomfundo Mogapi continues to advance policies and practices that place human dignity, psychological well-being, and restorative justice at the center of sustainable development. Her work has strengthened the intersection between mental wellness, leadership, and human rights, inspiring more compassionate and resilient communities across Africa.
`,
    videos: [
      {
        title:
          "Migration tensions and mental health: Nomfundo Mogapi weighs in",
        url: "https://www.youtube.com/embed/zJ0d__5l5UM?si=sOVoYYabXZxwTMdP",
      },
      {
        title:
          "Holiday season brings heightened feelings of isolation and anxiety",
        url: "https://www.youtube.com/embed/czDhoF49KAE?si=MOGfZmwRHDRCHQ3t",
      },
      {
        //1+
        title: "SA's healing journey",
        url: "https://www.youtube.com/embed/mJ_Kwd6YcYU?si=kvMNtFS-RVt-xVq6",
      },
      {
        title: "Lusikisiki massacre - trauma counselling needed",
        url: "https://www.youtube.com/embed/AS1fosJGfAg?si=MPT4GJHa9v9zotAU",
      },
      {
        title:
          "🎥 Let Your Light Shine: Renewing the Mind, Healing the Heart by Pst. Nomfundo Mogapi || 17 Aug 2025",
        url: "https://www.youtube.com/embed/mndlMjhM_K0?si=Ug0l2QPzrfkBfuAy",
      },
      {
        title: "Dealing with SA's collective societal trauma",
        url: "https://www.youtube.com/embed/CjXvEKjHHic?si=BYi5tFCjDKl_Ox9w",
      },
      {
        title:
          "The Anatomy of Violence in South Africa featuring Ms Nomfundo Mogapi and Ms Isobel Frye - 2019",
        url: "https://www.youtube.com/embed/CfqIAnu1kOk?si=8EkbEYqqpm_fgy_1",
      },
      {
        //3years
        title: "Discussion | Is South Africa suffering from collective trauma?",
        url: "https://www.youtube.com/embed/ZpzdEaK0kxU?si=mUtrnTv7tNa0N8I8",
      },
      {
        title:
          "INTERVIEW WITH NOMFUNDO MOGAPI - An Expert in Trauma Healing Approaches- GBV healing",
        url: "https://www.youtube.com/embed/GT5b8aGGzoU?si=K_toclOs4-H--GU1",
      },
      {
        //4+
        title:
          "Heritage Day I South Africa needs to heal from post colonial trauma",
        url: "https://www.youtube.com/embed/WHfYt1JBlzQ?si=70EI2mznKnAZLK7z",
      },
      {
        title: "The psychology of mass mobilisation",
        url: "https://www.youtube.com/embed/8Mtu4vXSQXA?si=ytPsU4qzWvAQHMPi",
      },
      {
        title:
          "Webinar with Ms Nomfundo Mogapi: Healthcare in Wounded Contexts: Strategies for Practitioners",
        url: "https://www.youtube.com/embed/enq8Rz0GjEM?si=tIxjmcKigy7nVJqA",
      },
      {
        title:
          "Health Hub | Tips to convince a friend to get vaccinated & unpacking the trauma of GBV | Ep3, P1",
        url: "https://www.youtube.com/embed/QoHwjWUaPw8?si=GCKV5_-YQ-9MLeKe",
      },
      {
        title: "THE WOMXN SHOW: DEPRESSION",
        url: "https://www.youtube.com/embed/AN4IPkQM3Oc?si=oSvnaTqS6EsoxIFZ",
      },
      {
        title:
          "Questions asked about the root cause of the violence seen in parts of KZN and Gauteng last week",
        url: "https://www.youtube.com/embed/i3U5SxOGQBs?si=vxF7lSqYloCNbu9Q",
      },
      {
        title:
          "The Greenlight Movement: Dealing with Grief during Covid-19 (2021)",
        url: "https://www.youtube.com/embed/PZ-U5MGvb3o?si=oQjig-XwXwASBx18",
      },
      {
        title: "Violence in SA | Understanding why communities loot",
        url: "https://www.youtube.com/embed/46sKtM5W-Ag?si=0uUlUELAVgW8bPtH",
      },
      {
        title:
          "Mob Justice | What should be done to prevent acts of vigilantism? - Nomfundo Mogapi",
        url: "https://www.youtube.com/embed/9xnb0Qv3FfM?si=D2-T2AJR8ksP4ZK0",
      },
      {
        title: "Panel 3",
        url: "https://www.youtube.com/embed/7Y8GujaW1nE?si=9z94G01AdAwrrPkd",
      },

      {
        title: "Tackling the scourge of gender-based violence: Nomfundo Mogapi",
        url: "https://www.youtube.com/embed/60tdBkbJ_E8?si=Ip6rr9vj_RPuqj2e",
      },
      {
        title:
          "CSVR calls on President Ramaphosa to lead from the front in the fight against gender-based violence",
        url: "https://www.youtube.com/embed/lRJPXGAGKKE?si=TwCD-7RUHAVC9OY8",
      },
      {
        title: "Gender Based Violence in SA - an ongoing battle",
        url: "https://www.youtube.com/embed/Mffc0w9DnBw?si=_jMOlk0ucZobcgea",
      },
      //7+
      {
        title: "Nomfundo Mogapi CSVR Director at the #NeverAgainZW Conference",
        url: "https://www.youtube.com/embed/cZnvjIFuaF0?si=NUPWJwJIiqGVmMT2",
      },
      {
        title: "Crime Stats | We are a country in crisis - Nomfundo Mogapi",
        url: "https://www.youtube.com/embed/9AcZP8bp8LI?si=CKAC4jjM-ZXvWRQZ",
      },
      {
        //8+
        title:
          "Easy access to guns, abuse of alcohol and drugs: Nomfundo Mogapi",
        url: "https://www.youtube.com/embed/BSW-QOjUFLo?si=BQKz5mIUcvS_F00d",
      },
      {
        title: "Violence in SA | Understanding why communities loot",
        url: "https://www.youtube.com/embed/46sKtM5W-Ag?si=_UYsOehiNPptSZ4E",
      },
      {
        title: "Debate Part 1 - Is South Africa a violent country?",
        url: "https://www.youtube.com/embed/hG-J2VQRCIc?si=q1V2xIUn7fCDlObJ",
      },
      {
        title: "Debate Part 2 - Is South Africa a violent country?",
        url: "https://www.youtube.com/embed/wF2CYRrHOtc?si=XQpvwrgt2sowhtDd",
      },
      {
        title: "Debate Part 3 - Is South Africa a violent country?",
        url: "https://www.youtube.com/embed/QIUG88kYyoY?si=HAFuFVaiV0E5Gv5u",
      },
      {
        title: "Debate Part 4 - Is South Africa a violent country?",
        url: "https://www.youtube.com/embed/WL6aKMuXrvA?si=wbVwdjD4dDb-xbSO",
      },
      {
        title:
          "Methodologies used by MHPSS and peacebuilding practitioners - South Africa",
        url: "https://www.youtube.com/embed/xArhOSkslnU?si=3SPbPHh5z1d64Tj4",
      },
      {
        title: "Up in Flames: Understanding Violence in Community Protests",
        url: "https://www.youtube.com/embed/4JDt_FZ32BE?si=58foiJTzcPu51nll",
      },
      //11+
      {
        title: "MWF SA Regional Conference - Migration Panel Discussion",
        url: "https://www.youtube.com/embed/E0oRWOMDpVg?si=Q2vTteKBnpRFd7Jj",
      },
    ],
    email: "nomfundomogapi@gmail.com",
    phone: "081 777 8888",
  },
  {
    //cant find interview
    id: 6,
    name: "Seadimo Tlale",
    role: "Human Rights Lawyer and Constitutional Law Expert",
    image: SeadimoTlale,
    bio: `

        Seadimo Tlale is a South African human rights lawyer and constitutional law expert dedicated to advancing equality, social justice, and the protection of constitutional rights. She serves as the Executive Director of SECTION27, where she leads strategic litigation, legal research, and advocacy to promote access to quality education, healthcare, and justice for marginalized communities.

        Tlale holds an LL.B. (cum laude) from the University of the Witwatersrand and an LL.M. from the University of California, Los Angeles (UCLA), specializing in Critical Race Studies and Public Interest Law. She has served as a law clerk to Justice Johan Froneman at the Constitutional Court of South Africa and has held research and advisory positions with the United Nations, the South African Human Rights Commission, the African American Policy Forum, UCLA's Promise Institute for Human Rights, Sonke Gender Justice, and the Centre for Applied Legal Studies at Wits University. Her legal practice is grounded in an intersectional approach to public interest and constitutional law.

        Among her most notable contributions is her leadership in advancing strategic litigation that strengthens constitutional rights and promotes accountability in South Africa. She has appeared in matters before the Constitutional Court, the High Courts, and the Labour Courts, contributing to the development of constitutional jurisprudence and expanding access to justice. An Allan Gray Orbis Foundation Fellow, she was also awarded UCLA's U Serve LA Award in 2021 for her outstanding contribution to social justice and was recognized by Professor Kimberlé Crenshaw for her exceptional work advancing racial justice.

        Recognized for her expertise in constitutional and public interest law, Seadimo Tlale continues to champion equality, dignity, and justice through strategic litigation, policy advocacy, and legal leadership. Her work reflects a deep commitment to ensuring that the Constitution remains a powerful instrument for transformative social change and the protection of human rights in South Africa.`,

    email: "seadimotlale@gmail.com",
    phone: "081 777 8888",
  },

  {
    //cant find interview
    id: 7,
    name: "Naabelah Mia",
    role: "Human Rights Lawyer and Gender Justice Advocate",
    image: NabeelahMia,
    bio: `

        Naabelah Mia is a South African human rights lawyer and gender justice advocate dedicated to advancing equality, dignity, and access to justice. She currently serves as the Executive Director of the Women's Legal Centre, where she leads strategic litigation, advocacy, and legal reform initiatives to promote and protect the rights of women and marginalized communities across South Africa.

        Mia holds a Bachelor of Social Science in Law and Psychology, an Honours degree in Psychology from the University of Cape Town, and a Master of Laws (LL.M.) from the University of California, Los Angeles (UCLA), specializing in Public Interest Law and Policy, as well as International and Comparative Law. Her career has spanned both the private and public interest sectors, including positions at Webber Wentzel, Sonke Gender Justice, the South African Institute for Advanced Constitutional, Public, Human Rights and International Law, the Centre for Environmental Rights, and Lawyers for Human Rights, where she headed the Penal Reform and Detention Monitoring Programme. She also served as a law clerk to Justice Nonkosi Mhlantla at the Constitutional Court of South Africa.

        Among her most notable contributions is her work advancing the rights of women, people deprived of their liberty, and other vulnerable communities. She has led advocacy and litigation on issues including torture prevention, prison and immigration detention reform, gender equality, and access to justice, while promoting alternatives to detention within the criminal justice and immigration systems. Through her leadership, she continues to strengthen legal protections for those most affected by discrimination, inequality, and systemic injustice.

        Recognized for her expertise in public interest and constitutional law, Naabelah Mia continues to champion human rights through strategic litigation, policy advocacy, and legal leadership. Her work reflects a deep commitment to ensuring that the law serves as a tool for dignity, equality, and meaningful social transformation for all South Africans.`,

    email: "nabeelahmia@gmail.com",
    phone: "082 999 0000",
  },
  {
    id: 8,
    name: "Kwezilomso Mbandazayo",
    role: "Constitutional Lawyer and Education Rights Advocate",
    image: KwezilomsoMbandazayo,
    bio: `

        Kwezilomso Mbandazayo is a South African constitutional lawyer, public interest advocate, and legal scholar dedicated to advancing equality, socio-economic rights, and access to quality education. She serves as the Executive Director of the Equal Education Law Centre (EELC), where she leads strategic litigation, legal research, and advocacy to promote and protect the constitutional right to basic education and other fundamental rights in South Africa.

        Mbandazayo has built a distinguished career in constitutional and public interest law, combining legal practice with academic scholarship. Before becoming Executive Director of the EELC, she served as a law clerk at the Constitutional Court of South Africa and held teaching and research positions focused on constitutional law, equality, and transformative justice. Her work has consistently explored the role of the Constitution in addressing systemic inequality and advancing social justice.

        Among her most notable contributions is her leadership in strategic litigation and advocacy aimed at improving access to quality education for all learners, particularly those in under-resourced communities. Through the Equal Education Law Centre, she has championed legal reforms addressing school infrastructure, learner safety, education funding, and accountability, while contributing to broader constitutional discourse on equality and socio-economic rights. Her work continues to strengthen the realization of education rights through evidence-based advocacy and public interest litigation.

        Recognized for her expertise in constitutional law and education rights, Kwezilomso Mbandazayo continues to champion justice, equality, and transformative constitutionalism through legal leadership, policy advocacy, and strategic litigation. Her commitment to protecting fundamental rights has made her an influential voice in advancing equitable access to education and social justice in South Africa.`,

    videos: [
      {
        //3wk
        title:
          "Movements, Lineages and Activisms – 1956 to 2026 (27 August 2026)",
        url: "https://www.youtube.com/embed/zhEBR7s8OVM?si=3SOXiizKvbvk59jU",
      },
      {
        //1+
        title:
          "Organising To Win!: Distinguishing between reform and revolution",
        url: "https://www.youtube.com/embed/LynHcetlYus?si=ExXjaKcPCXu5PToN",
      },
      {
        //4+
        title:
          "Feminist Legal Gains and Setbacks: From the Zuma Rape Trial to the Coko Judgement",
        url: "https://www.youtube.com/embed/FFl3Xic9gyM?si=gcO9fq-FxqXWEgcn",
      },
      {
        //5+
        title: "The Womxn Show: The National Strategic Plan",
        url: "https://www.youtube.com/embed/1GqRAf8ERHs?si=G_KQZ5fMVpcu2Poo",
      },
      {
        title: "Week 4 The Six Pillars of the NSP",
        url: "https://www.youtube.com/embed/OLFwbjGM2BM?si=ApZidbj2hc3iLZgt",
      },
      {
        title: "Stream: Week 12 How do we make the NSP GBVF work?",
        url: "https://www.youtube.com/embed/qkKSpfUsMs4?si=JjU0-qZ1a-6Y8qZi",
      },
      {
        //7+
        title:
          "Vavasati Festival 2019 Talk: Kwezilomso Mbandazayo (gender equality activist)",
        url: "https://www.youtube.com/embed/cfEQrUU7exU?si=6kBEFwVJqbRuESC5",
      },
      {
        title: "Violence against women reaches crisis point in South Africa",
        url: "https://www.youtube.com/embed/6O9spLJU0nk?si=oC9Ynfv_VAywtbvg",
      },
      {
        title: "One in Nine campaign explains silent protest",
        url: "https://www.youtube.com/embed/KEzFwtTYiJ8?si=fDMiWM3E5o52Kxw1",
      },
      //11+
      {
        title: "16 Days of Activism for No Violence against Women and Children",
        url: "https://www.youtube.com/embed/_A8Ql1MhoMw?si=CW1lWI6eOwc6hi8H",
      },
      {
        title: "Women on Wealth - Episode 18",
        url: "https://www.youtube.com/embed/0eOTIKNSLFw?si=kI0MTybKhlZn10Zl",
      },
    ],
    email: "kwezilomsombandazayo@gmail.com",
    phone: "082 999 0000",
  },
];

export default members;
