/**
 * @author 張柏揚<patrick080963@gmail.com>
 */
'use client';
import Link from "next/link";
import { useState,useEffect } from "react";
import { 
  Navbar, 
  NavbarBrand, 
  NavbarCollapse, 
  NavbarLink, 
  NavbarToggle,
  Footer,
  FooterCopyright, 
  FooterLink, 
  FooterLinkGroup,
  Carousel,
  Card,
  Button,
  DarkThemeToggle
} from "flowbite-react";
import CustomCard from './components/Card';

export default function Home() {
 
  const[items,setItems]=useState([]);

  useEffect(() => {
    const getToken= async() =>{
      const clienid=process.env.TDX_CLIENT_ID;
      const clientsecret=process.env.TDX_Client_Secret;
      const tokenParams=new URLSearchParams();
      tokenParams.append( 'grant_type','client_credentials')
      tokenParams.append('client_id',clienid)
      tokenParams.append('client_secret',clientsecret)
      const tokenResponse=await fetch('https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token',{
        method:'POST',
        headers:{'content-type':'application/x-www-form-urlencoded'},
        body: tokenParams.toString()
      });
    };
  },[]);
  /*const items = [
    {
      "ScenicSpotID": "C1_376490000A_000001",
      "ScenicSpotName": "雲林布袋戲館",
      "DescriptionDetail": "戲裡乾坤，彈指話說千古事前身質樸雅致的虎尾郡役所，於2001年正式公告為古蹟，並化身在地文化氣息濃厚的布袋戲館。館內詳盡介紹布袋戲各派別、角色、文化故事和歷史沿革，來自各國的經典戲偶角色；蘊藏著古早記憶的皮影戲偶及金碧輝煌的戲臺，以及備受好評的互動式表演，皆適合與長輩同遊，感受布袋戲演藝的時光隧道！一提到布袋戲這台灣之光，就不得不提到布袋戲的故鄉雲林虎尾鎮，而位於虎尾的雲林布袋戲館，就跟大家來特別介紹一下吧。 雲林布袋戲館展示布袋戲的發展史和靜態戲偶陳列，讓民眾能前來了解傳統布袋戲的發展，並保存傳統布袋戲，不讓文物文化流失。布袋戲館的成立，讓大家可以有地方吸收布袋戲文化，了解布袋戲過去的歷史，進而認同傳統藝術布袋戲。注意事項：1.全面禁煙、設攤兜售2.除導盲犬及功能犬，攜伴其他動物請置放可攜容器內3.12歲以下兒童需由成人帶領4.攝影勿開閃光燈5.展示品請勿觸摸及破壞公物6.學術單位或媒體需要拍攝者請於一周前申請7.展廳內勿飲食",
      "Description": "戲裡乾坤，彈指話說千古事前身質樸雅致的虎尾郡役所，於2001年正式公告為古蹟，並化身在地文化氣息濃厚的布袋戲館。館內詳盡介紹布袋戲各派別、角色、文化故事和歷史沿革，來自各國的經典戲偶角色；蘊藏著古早記憶的皮影戲偶及金碧輝煌的戲臺，以及備受好評的互動式表演，皆適合與長輩同遊，感受布袋戲演藝的時光隧道！",
      "Phone": "886-5-6313080",
      "Address": "雲林縣虎尾鎮林森路一段498號",
      "ZipCode": "632",
      "TravelInfo": "大眾運輸：台西客運虎尾站，下車步行1分鐘。開車：林森路一段與公安路交接口右邊-雲林布袋戲館位置：館於虎尾郵局斜對面、土地銀行旁",
      "OpenTime": "10:00-18:00一二公休，其餘依臉書公告而定",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/StoreCover/220223023134430252UEWYU.jpg",
        "PictureDescription1": "雲林布袋戲館",
        "PictureUrl2": "https://tour.yunlin.gov.tw/public/upload/StoreCover/2202230231344458532J571.jpg",
        "PictureDescription2": "雲林布袋戲館"
      },
      "MapUrl": "https://goo.gl/maps/bLNjsdS1nnaMrw3bA",
      "Position": {
        "PositionLon": 120.43340301513672,
        "PositionLat": 23.709280014038086,
        "GeoHash": "wsjwus0ut"
      },
      "Class1": "文化類",
      "Class2": "古蹟類",
      "Class3": "藝術類",
      "ParkingInfo": "館後方有公安路收費停車場(限自小客車)。此為資訊揭露，依停車場之規定為主。  為避免參觀人車造成館前交通要道壅塞，大客車(九人座以上遊覽車輛)，請在入口放人後，車輛儘速移走。",
      "ParkingPosition": {},
      "TicketInfo": "免費自行參觀  自費項目：DIY課程酌收材料費、劇團售票演出、預約導覽",
      "Keyword": "雲林布袋戲館,虎尾",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000002",
      "ScenicSpotName": "北港朝天宮",
      "DescriptionDetail": "台灣媽祖總本山北港朝天宮主祀媽祖，俗呼北有關渡媽，南有北港媽。廟為國定古蹟，每年農曆三月十九、二十日，國家重要民俗-「北港迓媽祖」熱鬧，成就了北港眾多的工藝匠師以及百年藝陣。位於雲林北港的北港朝天宮，舊稱「天妃廟」或「天后宮」，是一座歷史悠久莊嚴的媽祖廟，建立於1694年至今已經300多年的歷史，也是國定第二級古蹟。 宗教廟宇是人民重要的精神寄託，每年農曆三月十九、二十日是北港地區更熱鬧的日子「北港朝天宮迎媽祖」的繞境活動，讓全民「瘋媽祖」。繞境的範圍並不會前往到其他縣市，卻有著許多專屬於北港朝天宮的特色。",
      "Description": "台灣媽祖總本山北港朝天宮主祀媽祖，俗呼北有關渡媽，南有北港媽。廟為國定古蹟，每年農曆三月十九、二十日，國家重要民俗-「北港迓媽祖」熱鬧，成就了北港眾多的工藝匠師以及百年藝陣。",
      "Phone": "886-5-7832055",
      "Address": "雲林縣北港鎮中山路178號",
      "ZipCode": "651",
      "TravelInfo": "國道南下：走國道3號從古坑系統國道1號從雲林系統，接78號快速道路，往台西方向從虎尾交流下走145縣道，若從元長交流道下走台19線，從東勢交流道下走153號縣道再接155縣道。 國道北上：國道1號下嘉義交流道(北港/新港)，直行縣道159線(太保市北港路;新港鄉中山路)，左轉縣道164線(福德路)，右轉台19線過北港大橋 ，直行雲林北港鎮義民路 ，右轉中正路或民主路。",
      "OpenTime": "05:00-00:00(特殊情況依廟方時間為主)",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/StoreCover/220209053049151053QRMQF.jpg",
        "PictureDescription1": "北港朝天宮",
        "PictureUrl2": "https://tour.yunlin.gov.tw/public/upload/StoreCover/220613114737271145CW3UP.jpg",
        "PictureDescription2": "北港朝天宮",
        "PictureUrl3": "https://tour.yunlin.gov.tw/public/upload/StoreCover/2206131148518026821JGU2.jpg",
        "PictureDescription3": "北港朝天宮"
      },
      "MapUrl": "https://goo.gl/aCQLBm",
      "Position": {
        "PositionLon": 120.30480194091797,
        "PositionLat": 23.568090438842773,
        "GeoHash": "wsjw1d7q1"
      },
      "Class3": "遊憩類",
      "ParkingInfo": "路邊停車",
      "ParkingPosition": {},
      "TicketInfo": "免費參觀",
      "Keyword": "北港朝天宮",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000003",
      "ScenicSpotName": "成龍濕地",
      "DescriptionDetail": "黑面琵鷺天堂和絕美夕照成龍溼地原為可耕地，因為受到地層下陷、海水倒灌影響而不得不廢耕。但也因生態演化豐富，常吸引黑面琵鷺等等的罕見鳥類進駐。經過藝術家的設計裝置藝術「水核心」後，此地的絕美夕照已成為口湖名勝，必須一訪。成龍濕地位於雲林口湖鄉，是一般保護區，被列為國家重要濕地之一，目前已由荒廢的田地演化為生物群集的濕地，每年都有成千上萬的候鳥飛來駐足棲息，有瀕臨絕種的黑面琵鷺，還有小燕鷗、紅隼等等，更有豐富的魚類及螃蟹等，儼然是地方重要觀光資源。",
      "Description": "黑面琵鷺天堂和絕美夕照成龍溼地原為可耕地，因為受到地層下陷、海水倒灌影響而不得不廢耕。但也因生態演化豐富，常吸引黑面琵鷺等等的罕見鳥類進駐。經過藝術家的設計裝置藝術「水核心」後，此地的絕美夕照已成為口湖名勝，必須一訪。",
      "Phone": "886-5-7970213",
      "Address": "口湖鄉成龍村(成龍社區發展協會)",
      "ZipCode": "653",
      "TravelInfo": "斗南交流道下往北港方向行駛，於164縣道往口湖近入金湖走台十七線成龍二橋旁。",
      "OpenTime": "24HR",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/StoreCover/230116023954870096V2958.jpg",
        "PictureDescription1": "成龍濕地",
        "PictureUrl2": "https://tour.yunlin.gov.tw/public/upload/StoreCover/2301160239549169729JJH8.jpg",
        "PictureDescription2": "成龍濕地",
        "PictureUrl3": "https://tour.yunlin.gov.tw/public/upload/StoreCover/230116023954932601VAHBE.jpeg",
        "PictureDescription3": "成龍濕地"
      },
      "MapUrl": "https://goo.gl/niV37K",
      "Position": {
        "PositionLon": 120.16419982910156,
        "PositionLat": 23.55491065979004,
        "GeoHash": "wsjqn2hck"
      },
      "Class1": "自然風景類",
      "ParkingInfo": "安龍宮前廣場或路邊停車",
      "ParkingPosition": {},
      "TicketInfo": "免費參觀，需要預約導覽服務請來電洽詢",
      "Keyword": "濕地,黑面琵鷺,小燕鷗,黑嘴鷗,紅隼,彩鷸,紅尾伯勞,燕鴴",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000024",
      "ScenicSpotName": "偶的家-戲偶文創園區",
      "DescriptionDetail": "傳統國粹，細緻展現。以長年雕刻偶頭出身的徐炎卿師父，其家族後人開創的戲偶文創園區收藏了著名的布袋戲角色，經典角色譬如：史艷文、素還真、黑白郎君等等，留待大家近距離見識偶的美、偶的細節。布袋戲深耕台灣百年也是台灣具有代表性地方文化，精彩的布袋戲表演背後布袋戲偶的雕刻製作絕對功不可沒，徐炎卿大師從50年代開始投入布袋戲偶雕刻，也製作出風靡全台的布袋戲精典角色史艷文、藏鏡人、黑白郎君、劉三、怪老子、二齒等知名人物，炎卿大師的子孫也傳承了這項工藝，目前也已經傳承到第三代了。",
      "Description": "傳統國粹，細緻展現。以長年雕刻偶頭出身的徐炎卿師父，其家族後人開創的戲偶文創園區收藏了著名的布袋戲角色，經典角色譬如：史艷文、素還真、黑白郎君等等，留待大家近距離見識偶的美、偶的細節。",
      "Phone": "886-5-5970699",
      "Address": "雲林縣斗南鎮建國三路506號",
      "ZipCode": "630",
      "TravelInfo": "南下：斗南交流道左轉大業路往斗南右轉延平一段接二段右轉建國三路。 北上：過大林交流道接 78號東西向(古坑線)下斗南快速道左轉建國三路。 火車：搭乘台鐵列車至斗南車站下車，再轉搭計程車前往建國三路~偶的家。",
      "OpenTime": "09:00-18:00一公休",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/old/20180809055042.jpg",
        "PictureDescription1": "炎卿偶的家"
      },
      "MapUrl": "https://goo.gl/Vqyor2",
      "Position": {
        "PositionLon": 120.47229766845703,
        "PositionLat": 23.66724967956543,
        "GeoHash": "wsjwtkmpx"
      },
      "Class3": "遊憩類",
      "ParkingInfo": "可停園區外圍的人行道，遊覽車可臨停路邊。",
      "ParkingPosition": {},
      "TicketInfo": "免費  戲偶工藝展場需購門票50元，可抵消費，100公分以下免費。",
      "Remarks": "DIY手作教室開班時間： 平日（星期二～五）採預約制，滿五人報名即開班 假日（星期六、日）開班時間10:00~12:00 14:00~16:00 凡購買材料包者可免費參觀戲偶工藝展場",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000025",
      "ScenicSpotName": "太平老街",
      "DescriptionDetail": "古色古香的台灣味老街斗六太平老街上的舊式洋樓房建築多採巴洛克式建築，街巷間有蛋飯、圓仔冰、肉圓、魷魚嘴焿等傳統台灣味美食，常有外國觀光客特意造訪，更充滿樂齡長輩偏愛的古早味情調。太平老街位於雲林縣斗六市的太平路上，全長約600公尺，太平路一直是斗六的主要商店街，老街上的樓房建築特色以巴洛克式風格為主體設計，於日治時代建立至今已超過90多年的歷史，每棟樓房建築為兩層樓高，部分樓房更有刻上家族姓氏，於牆面及外壁上皆刻有精美及栩栩如生的雕飾圖案，除了呈現建築藝術的美感之外，還有顯赫名門世家的意涵存在。",
      "Description": "古色古香的台灣味老街斗六太平老街上的舊式洋樓房建築多採巴洛克式建築，街巷間有蛋飯、圓仔冰、肉圓、魷魚嘴焿等傳統台灣味美食，常有外國觀光客特意造訪，更充滿樂齡長輩偏愛的古早味情調。",
      "Phone": "886-5-5332000",
      "Address": "雲林縣斗六市太平路",
      "ZipCode": "640",
      "TravelInfo": "【自行開車】 南下：自國道三號斗六交流道下，沿石榴路直行，續接文化路，進入斗六圓環接太平路即可抵達。 北上：自國道三號古坑交流道下，接78號公路斗六出口下，沿仁愛路直行接中山路，右轉接太平路即可抵達。 【搭乘火車】 搭乘火車至斗六火車站，沿大同路直行遇太平路抵達。",
      "OpenTime": "24HR",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/old/20190123114452.jpg",
        "PictureDescription1": "太平老街商家林立",
        "PictureUrl2": "https://tour.yunlin.gov.tw/public/upload/old/20180607110116.jpg",
        "PictureDescription2": "巴洛克式風格建築",
        "PictureUrl3": "https://tour.yunlin.gov.tw/public/upload/old/20180607110113.jpg",
        "PictureDescription3": "蔡姓街屋"
      },
      "MapUrl": "https://goo.gl/aRQk2U",
      "Position": {
        "PositionLon": 120.54180145263672,
        "PositionLat": 23.70853042602539,
        "GeoHash": "wsjwyupb5"
      },
      "Class1": "遊憩類",
      "ParkingInfo": "附近付費停車場",
      "ParkingPosition": {},
      "TicketInfo": "免費參觀",
      "Keyword": "太平老街",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000027",
      "ScenicSpotName": "行啟記念館",
      "DescriptionDetail": "紅磚黑瓦，雅緻集會中心紀念日本皇太子裕仁訪台，是成為斗六市民重要的集會事務空間。以日式紅磚黑瓦建構，每周日前廣場舉辦在地小農市集，記念館明亮高大，其他附屬建築小巧雅緻，是斗六旅遊必經之地。行啟記念館的設立，源自於紀念來台行啟的裕仁皇太子。日本天皇出巡視察稱為「行幸」，皇太子或是皇后則稱為「行啟」。 「斗六行啟記念館」創於1926年，是由當地士紳吳克明發起與地方鄉親捐款和官方共同集資而成，至今已有90多年的歷史。 一方面作為裕仁皇太子行啟台灣事蹟之記念，另一方面則作為居民聚會之公共建築物，以滿足當地居民對公共聚會空間(集會、學習、宴會、表演)的需求。 光復後，本館先後租給「地下水公司」、「嘉義監理站斗六分站」、「軍公教福利品中心」等單位。",
      "Description": "紅磚黑瓦，雅緻集會中心紀念日本皇太子裕仁訪台，是成為斗六市民重要的集會事務空間。以日式紅磚黑瓦建構，每周日前廣場舉辦在地小農市集，記念館明亮高大，其他附屬建築小巧雅緻，是斗六旅遊必經之地。",
      "Phone": "886-5-5339479",
      "Address": "雲林縣斗六市府前街101號",
      "ZipCode": "640",
      "TravelInfo": "(國道3號)斗六交流道下接台3線往斗六市區仁義路 中山路171巷右轉府前路即可到達行啟記念館",
      "OpenTime": "13:00-21:00六日09:00-21:00一二公休",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/old/20181121023809.jpg",
        "PictureDescription1": "展售空間"
      },
      "MapUrl": "https://goo.gl/maps/NgR9rNQQHJq",
      "Position": {
        "PositionLon": 120.54190063476562,
        "PositionLat": 23.70611000061035,
        "GeoHash": "wsjwygxfj"
      },
      "Class1": "其他",
      "ParkingInfo": "附近公立停車場",
      "ParkingPosition": {},
      "TicketInfo": "免費參觀",
      "Keyword": "行啟館",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000049",
      "ScenicSpotName": "源順芝麻觀光油廠",
      "DescriptionDetail": "廚房至寶：安心用油~冷壓芝麻油。探訪以「製造有益人體健康之產品」為目標的土庫鎮「源順芝麻觀光油廠」是通過經濟部評鑑觀光工廠，可以學習如何選購好油，用好油及吃好油。最佳伴手禮是已催芽黑芝麻粉及芝麻油。必吃美食是芝麻糖、芝麻冰。",
      "Description": "廚房至寶：安心用油~冷壓芝麻油。探訪以「製造有益人體健康之產品」為目標的土庫鎮「源順芝麻觀光油廠」是通過經濟部評鑑觀光工廠，可以學習如何選購好油，用好油及吃好油。最佳伴手禮是已催芽黑芝麻粉及芝麻油。必吃美食是芝麻糖、芝麻冰。",
      "Phone": "886-5-6622574",
      "Address": "雲林縣土庫鎮成功路1-62號",
      "ZipCode": "633",
      "TravelInfo": "【南下】國道一號過斗南交流道，國道三號過斗六交流道，接78號快速道路，往台西方向， 【北上】國道一號過斗南收費站，國道三號過古坑收費站，接78號快速道路，往虎尾土庫方向， 下（虎尾、土庫）第一個交流道，左轉往北港方向，3分鐘過天主教永年中學後，於土庫外環道左轉，30秒經土庫國小越港分校，就可以看到我們了。歡迎光臨。",
      "OpenTime": "參觀場域09:30-17:30商品販售08:00-18:00",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/old/20190123115108.jpg",
        "PictureDescription1": "源順芝麻觀光油廠",
        "PictureUrl2": "https://tour.yunlin.gov.tw/public/upload/StoreCover/220513042303926212Z5H94.png",
        "PictureDescription2": "源順芝麻觀光油廠2",
        "PictureUrl3": "https://tour.yunlin.gov.tw/public/upload/StoreCover/2205130423039574624RNEV.png",
        "PictureDescription3": "源順芝麻觀光油廠3"
      },
      "MapUrl": "https://goo.gl/VLZU7e",
      "Position": {
        "PositionLon": 120.39469909667969,
        "PositionLat": 23.674110412597656,
        "GeoHash": "wsjwetsxx"
      },
      "Class1": "觀光工廠類",
      "ParkingInfo": "備有停車場",
      "ParkingPosition": {},
      "TicketInfo": "免費參觀",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000085",
      "ScenicSpotName": "虎尾厝沙龍",
      "DescriptionDetail": "老厝變沙龍 虎尾藝文新據點   前立委王麗萍費了二年功夫整理，將隱身於虎尾市區一棟七十多年「興亞式」老厝重新整理，營造成推動生態、性別、另類全球化的據點，不僅為雲林留下一棟歷史建築，更增加一處推廣藝術、文化、生態、性別主義的沙龍。   虎尾厝沙龍隱身於虎尾市區巷弄之中，是一棟兼具「和風」與「洋味」的建築，約興建於一九四○年代，因都市擴展，被淹沒在建築群之中，虎尾人知道反而不多，二年多前王麗萍因緣際會下，買下這棟建築，著手整理後，營造成以發展深刻藝文的空間。    虎尾厝沙龍是雲林縣第一個嘗試結合藝術、文化、生態、環保、文學的空間，王麗萍表示，虎尾厝將這棟老建築的美保留下來，同時加入許多現代藝術創作，展現思考、討論的精神，為雲林保留一棟值得品味的公共建築。",
      "Description": "老厝變沙龍 虎尾藝文新據點   前立委王麗萍費了二年功夫整理，將隱身於虎尾市區一棟七十多年「興亞式」老厝重新整理，營造成推動生態、性別、另類全球化的據點，不僅為雲林留下一棟歷史建築，更增加一處推廣藝術、文化、生態、性別主義的沙龍。   虎尾厝沙龍隱身於虎尾市區巷弄之中，是一棟兼具「和風」與「洋味」的建築，約興建於一九四○年代，因都市擴展，被淹沒在建築群之中，虎尾人知道反而不多，二年多前王麗萍因緣際會下，買下這棟建築，著手整理後，營造成以發展深刻藝文的空間。    虎尾厝沙龍是雲林縣第一個嘗試結合藝術、文化、生態、環保、文學的空間，王麗萍表示，虎尾厝將這棟老建築的美保留下來，同時加入許多現代藝術創作，展現思考、討論的精神，為雲林保留一棟值得品味的公共建築。",
      "Phone": "886-5-6313826",
      "Address": "雲林縣虎尾鎮 民權路51巷3號",
      "ZipCode": "632",
      "OpenTime": "<p>週三至週日10：00-17：30</p>",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/StoreCover/220613020312563714WCEX4.jpg",
        "PictureDescription1": "虎尾厝沙龍",
        "PictureUrl2": "https://tour.yunlin.gov.tw/public/upload/StoreCover/2206130203125949851JKYK.jpg",
        "PictureDescription2": "虎尾厝沙龍",
        "PictureUrl3": "https://tour.yunlin.gov.tw/public/upload/StoreCover/2206130203126262304XQGQ.jpg",
        "PictureDescription3": "虎尾厝沙龍"
      },
      "MapUrl": "https://maps.app.goo.gl/LdkjeSvkE6jm27FD6",
      "Position": {
        "PositionLon": 120.43589782714844,
        "PositionLat": 23.709619522094727,
        "GeoHash": "wsjwus4wx"
      },
      "WebsiteUrl": "https://m.facebook.com/huwei.salon/",
      "ParkingInfo": "公共停車場、路邊停車",
      "ParkingPosition": {},
      "TicketInfo": "本建物為現任屋主自主修復並主動提報為縣定歷史建築，入館參觀僅收取60元「文化資產維護費」(可抵消費)。入座每人低消為220元，享有不限時的閱讀時光，以及無所不在的生活美感呈現。",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000086",
      "ScenicSpotName": "魔羯魚祈福館",
      "DescriptionDetail": "為佛教文化藝術的展覽館，以祈福為主題的文化創意商店  館藏一百多件精美的佛像、唐卡、文物，讓您有如遠赴西藏佛境  走進魔羯魚祈福館，日子彷彿變得緩慢又舒適  簡單的一杯茶或咖啡，享受禪意的生活步調    【1F/ 咖啡．茶、藏香、文創商品】  【2F/ 魔羯魚美術館】  【3F/ 瑜珈教室】  satiyoga覺瑜珈－課程時間：週五19:30~21:00  昆達里尼瑜珈－課程時間：週四18:30~20:00",
      "Description": "為佛教文化藝術的展覽館，以祈福為主題的文化創意商店  館藏一百多件精美的佛像、唐卡、文物，讓您有如遠赴西藏佛境  走進魔羯魚祈福館，日子彷彿變得緩慢又舒適  簡單的一杯茶或咖啡，享受禪意的生活步調    【1F/ 咖啡．茶、藏香、文創商品】  【2F/ 魔羯魚美術館】  【3F/ 瑜珈教室】  satiyoga覺瑜珈－課程時間：週五19:30~21:00  昆達里尼瑜珈－課程時間：週四18:30~20:00",
      "Phone": "886-5-5321775",
      "Address": "雲林縣斗六市城頂街146-5號",
      "ZipCode": "640",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/old/20180709042536.jpg",
        "PictureDescription1": "魔羯魚祈福館"
      },
      "Position": {
        "PositionLon": 120.54029846191406,
        "PositionLat": 23.7064208984375,
        "GeoHash": "wsjwygwgb"
      },
      "ParkingInfo": "雲林溪平面停車場（斗六西平路郵局斜對面），每日50元",
      "ParkingPosition": {},
      "TicketInfo": "【2F/ 魔羯魚美術館】免費參觀要預約  導覽門票50元",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000087",
      "ScenicSpotName": "雅聞峇里海岸觀光工廠",
      "DescriptionDetail": "無須出境，也有南洋風景。雲林斗六獨樹一格的觀光區域，甚至曾邀請蕭敬騰代言在地特色。雅聞峇里海岸觀光工廠擁有傲人的寬闊空間，偌大園區足足有十餘種不同主題的廠區，不需要出國，也能坐擁豐富多元的南洋風情，讓您打卡也會打到手軟。專門生產雅聞熱賣的柳杉芬多精透明皂的雅聞峇里海岸，落於斗六石榴班百年火車站旁，是國內最大的南洋風情景觀，舒壓、藝術、美學、購物的旅遊勝地。擁有大規模的茅草屋群，棕櫚樹、迎賓瀑布、鏡面水池、藝廊空間及明媚的沙灘風景。來此可了解香氛肥皂的製作過程，同時徜徉於南洋風情，慢活愜意! 入園參觀免門票，園區內設有異國風味餐廳，提供下午茶及餐點服務，遊客可選擇在戶外的茅草屋下，悠閒的享用美食同時感受南洋風的氛圍，草原區也新增多種優雅的茶玫瑰及蔓玫可供欣賞。另一邊首創大型人造沙灘是親子同樂的熱門景點。此外也提供香氛DIY課程，歡迎團體遊客預約報名喔！圖片來源：業者提供。",
      "Description": "無須出境，也有南洋風景。雲林斗六獨樹一格的觀光區域，是通過經濟部評鑑觀光工廠，甚至曾邀請蕭敬騰代言在地特色。雅聞峇里海岸觀光工廠擁有傲人的寬闊空間，偌大園區足足有十餘種不同主題的廠區，不需要出國，也能坐擁豐富多元的南洋風情，讓您打卡也會打到手軟。",
      "Phone": "886-5-5511585",
      "Address": "斗六市中興路333號",
      "ZipCode": "640",
      "OpenTime": "08:30-17:00",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/StoreCover/2205130418060582544JF65.jpg",
        "PictureDescription1": "雅聞峇里海岸觀光工廠",
        "PictureUrl2": "https://tour.yunlin.gov.tw/public/upload/StoreCover/220513041806089507QLPF6.jpg",
        "PictureDescription2": "雅聞峇里海岸觀光工廠2",
        "PictureUrl3": "https://tour.yunlin.gov.tw/public/upload/StoreCover/2205130418061520347UE39.png",
        "PictureDescription3": "雅聞峇里海岸觀光工廠3"
      },
      "Position": {
        "PositionLon": 120.5696029663086,
        "PositionLat": 23.73004913330078,
        "GeoHash": "wsjwzxuje"
      },
      "Class1": "遊憩類",
      "Class2": "觀光工廠類",
      "ParkingInfo": "備有大客車及小客車專用免費停車場",
      "ParkingPosition": {},
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000088",
      "ScenicSpotName": "佛美神仙故事館",
      "DescriptionDetail": "佛美神仙故事館位於雲林縣西螺鎮的一個文創觀光園區，由佛美佛藝社創立於2015年，董事長在地深耕數十年，為保留台灣拜拜文化，弘揚神仙的由來和故事，以及拜神的意義，實踐宗教勸善的精神，並在生活中極力推廣現代佛像美學藝術，讓宗教精品工藝與文創產業可以融入現代的生活當中，進而帶動地方觀光發展，促進雲林旅遊話題，開發文化產業創新的契機，活絡區域商機。園區規劃分區，主要展館佛美神仙故事館從策畫到執行製作，透過企業董事長林國珍虔誠構思下呈現精湛的「宗教美學博物館」，遊逛路線更規劃各種神仙故事主題區，可認識各種民間信仰與神祉故事：從五教聖人、三皇五帝、三清道祖、五路財神、媽祖、觀世音菩薩到六十甲子太歲諸神，讓遊客彷彿進入宇宙天堂嬉遊，全面性認識世界各個宗教文化與神仙故事，同時也把各種宗教信仰的精神和拜神的意義融合在導覽行程當中。",
      "Description": "佛美神仙故事館位於雲林縣西螺鎮的一個文創觀光園區，由佛美佛藝社創立於2015年，董事長在地深耕數十年，為保留台灣拜拜文化，弘揚神仙的由來和故事，以及拜神的意義，實踐宗教勸善的精神，並在生活中極力推廣現代佛像美學藝術，讓宗教精品工藝與文創產業可以融入現代的生活當中，進而帶動地方觀光發展，促進雲林旅遊話題，開發文化產業創新的契機，活絡區域商機。",
      "Phone": "886-5-5862168",
      "Address": "雲林縣西螺鎮福來路8巷19號",
      "ZipCode": "648",
      "OpenTime": "星期一~星期日 AM10:00~PM5:30 特殊休假日官網另行公告",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/StoreCover/220601041932772908N6AX2.jpg",
        "PictureDescription1": "佛美神仙故事館",
        "PictureUrl2": "https://tour.yunlin.gov.tw/public/upload/StoreCover/2206010419327885343C76S.jpg",
        "PictureDescription2": "佛美神仙故事館",
        "PictureUrl3": "https://tour.yunlin.gov.tw/public/upload/old/20180709043432.jpg",
        "PictureDescription3": "佛美神仙故事館"
      },
      "MapUrl": "https://goo.gl/maps/ztGEMDJkKC4JQxhP6",
      "Position": {
        "PositionLon": 120.44830322265625,
        "PositionLat": 23.776830673217773,
        "GeoHash": "wsjxkb7y0"
      },
      "WebsiteUrl": "https://www.furmaystoryhouse.com.tw/",
      "ParkingInfo": "備有大客車及小客車專用免費停車場",
      "ParkingPosition": {},
      "TicketInfo": "詳見官方網站公告",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000089",
      "ScenicSpotName": "澄霖味道森林館",
      "DescriptionDetail": "佔地約5.8公頃，為國內最大的沉香然景觀休閒農場。園區整體以日式禪風的簡約典雅為主軸，擁有一大片景觀生態池，庭園中種植多達80多種樹種可供觀賞。主場館內除了有國際級導覽及藝品介紹區之外，還能欣賞到澄霖獨家收藏的世界上最大的阿里山千年神木，以及高達2層樓的千年沉香木 戶外設有親子遊憩餐廳，全家人在品味美食的同時，還能一同在沙坑中嬉戲 ，享受天倫之樂。 「味道森林館」不單單是一處天然的休閒農場，這裡更是一座兼具自然、環保、優質的沉香生態園，讓您除了欣賞美麗的景色之外，更能體驗及認識這世上最美麗的味道-沉香。 景點特色：自然農法、無毒栽種，許一個幸福健康的未來。",
      "Description": "佔地約5.8公頃，為國內最大的沉香然景觀休閒農場。園區整體以日式禪風的簡約典雅為主軸，擁有一大片景觀生態池，庭園中種植多達80多種樹種可供觀賞。主場館內除了有國際級導覽及藝品介紹區之外，還能欣賞到澄霖獨家收藏的世界上最大的阿里山千年神木，以及高達2層樓的千年沉香木 戶外設有親子遊憩餐廳，全家人在品味美食的同時，還能一同在沙坑中嬉戲 ，享受天倫之樂。 「味道森林館」不單單是一處天然的休閒農場，這裡更是一座兼具自然、環保、優質的沉香生態園，讓您除了欣賞美麗的景色之外，更能體驗及認識這世上最美麗的味道-沉香。  景點特色：自然農法、無毒栽種，許一個幸福健康的未來。",
      "Phone": "886-5-6225757",
      "Address": "雲林縣虎尾鎮惠來路75之6號",
      "ZipCode": "632",
      "OpenTime": "08:00-17:30",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/old/20180709043835.jpg",
        "PictureDescription1": "澄霖味道森林館",
        "PictureUrl2": "https://tour.yunlin.gov.tw/public/upload/StoreCover/220613015918135513H938K.jpg",
        "PictureDescription2": "澄霖味道森林館",
        "PictureUrl3": "https://tour.yunlin.gov.tw/public/upload/StoreCover/220613015918151131PWGN4.jpg",
        "PictureDescription3": "澄霖味道森林館"
      },
      "Position": {
        "PositionLon": 120.49210357666016,
        "PositionLat": 23.728939056396484,
        "GeoHash": "wsjwvzexj"
      },
      "Class1": "遊憩類",
      "ParkingInfo": "備有停車場",
      "ParkingPosition": {},
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000090",
      "ScenicSpotName": "台灣鯛生態創意園區",
      "DescriptionDetail": "水下產業鏈，目不暇給。以台灣鯛為核心的生態創意園區，重點主題除了介紹台灣鯛的演進與生態外，也展示從傳統到科技智能養殖的過程，台灣鯛魚片的加工，以及全魚應用。結合在地產業及觀光美食，讓遊客有豐富多元完整的體驗，可說是有吃又玩又有得學！",
      "Description": "水下產業鏈，目不暇給。以台灣鯛為核心的生態創意園區，重點主題除了介紹台灣鯛的演進與生態外，也展示從傳統到科技智能養殖的過程，台灣鯛魚片的加工，以及全魚應用。結合在地產業及觀光美食，讓遊客有豐富多元完整的體驗，可說是有吃又玩又有得學！",
      "Phone": "886-5-7993996",
      "Address": "雲林縣口湖鄉崙東村民生路1-88號",
      "ZipCode": "653",
      "OpenTime": "10:00-16:30一二三公休採預約制",
      "Picture": {
        "PictureDescription1": "台灣鯛生態創意園區",
        "PictureDescription2": "台灣鯛生態創意園區(內部)",
        "PictureDescription3": "台灣鯛生態創意園區(內部一隅)"
      },
      "MapUrl": "https://lihi1.cc/d1vWh",
      "Position": {
        "PositionLon": 120.17250061035156,
        "PositionLat": 23.608009338378906,
        "GeoHash": "wsjqq9dyw"
      },
      "Class1": "遊憩類",
      "Level": "非古蹟",
      "WebsiteUrl": "https://www.kf-fish.com/",
      "ParkingInfo": "共可停放遊覽車10台, 小型車50台",
      "ParkingPosition": {},
      "TicketInfo": "全票NT$100  優待票NT$50  6歲以下免費 凡雲林縣居民憑身分證證明，即可免費入場  (優待票適用6-12歲兒童、65歲(含)以上長者與身心障礙者)   ※門票可於展館內單張折抵單筆消費※",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000091",
      "ScenicSpotName": "良作工場農業文創館",
      "DescriptionDetail": "誰知盤中豬，片片皆辛苦。良作無私公開分享豬肉製品的生產線現場，毫無半點藏私之心，更設計流利的觀光動線，結合趣味手作活動，企劃貢丸製作課程，讓遊客們體驗自主生產出屬於自己的第一顆手作豬肉食品時、那份無可取代的第一手感動。榮獲107年經濟部「國際亮點」觀光工廠的評選，文創館位於雲林縣大埤鄉，靠近石龜車站，是一個以豬肉為主題的觀光工廠，經由透明生產過程及有趣的體驗方式，傳達對豬肉食品的堅持，適合作為家庭用餐、朋友聊天的場所。",
      "Description": "誰知盤中豬，片片皆辛苦。良作為通過經濟部評鑑觀光工廠；無私公開分享豬肉製品的生產線現場，毫無半點藏私之心，更設計流利的觀光動線，結合趣味手作活動，企劃貢丸製作課程，讓遊客們體驗自主生產出屬於自己的第一顆手作豬肉食品時、那份無可取代的第一手感動。",
      "Phone": "886-5-5529586",
      "Address": "大埤鄉豐田工業區豐田路57號",
      "ZipCode": "631",
      "TravelInfo": "國道一號：雲林系統交流道(243公里)往東轉78號台西古坑快速道路，往大林方向下達台一線，沿台一線行駛約5分鐘右轉嘉興東路，左轉豐田路直行後抵達。 國道三號： 古坑系統交流道(269公里)往西轉78號台西古坑快速道路，直達78號快速道路斗南交流道，往大林方向下達台一線，沿台一線行駛約5分鐘右轉嘉興東路，左轉豐田路直行後抵達。",
      "OpenTime": "10:00-17:00一二公休",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/old/20181121023909.jpg",
        "PictureDescription1": "良作工場農業文創館",
        "PictureUrl2": "https://tour.yunlin.gov.tw/public/upload/StoreCover/220513041356049670QJBTS.png",
        "PictureDescription2": "良作工場農業文創館2",
        "PictureUrl3": "https://tour.yunlin.gov.tw/public/upload/StoreCover/2205130413561122341DCKQ.jpg",
        "PictureDescription3": "良作工場農業文創館3"
      },
      "MapUrl": "https://goo.gl/F6zzyp",
      "Position": {
        "PositionLon": 120.46720123291016,
        "PositionLat": 23.639480590820312,
        "GeoHash": "wsjwmr3tc"
      },
      "Class1": "觀光工廠類",
      "Class2": "遊憩類",
      "ParkingInfo": "園區內設立停車場",
      "ParkingPosition": {},
      "TicketInfo": "【2019年優惠全票50元，全抵館內消費。其餘免費。】 全票200元(全抵館內消費)、優惠票100元(全抵館內消費)、免門票。 (請以官網最新公告或館舍現場為準)",
      "Keyword": "良作工場農業文創館,Next Land",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000092",
      "ScenicSpotName": "北港春生活園區",
      "DescriptionDetail": "生命與土地是需要和諧共處共榮，透過了解過往先人的生活痕跡，尋找可能的未來。「北港春」秉持著「人才傳藝，據點維新」的精神，透過與捷克藝術家「海大海」合作，一步一腳印，胼手胝足打造園區每一方寸，等您用心來探索品味，找到屬於您自己的美好回憶。   現代生活不僅是物質生活條件的追求，更重要的是精神上的豐盈滿足。旅遊可以是休閒、放鬆、享受，更可以是重要的精神糧食，期待您來「北港春」與我們一起回到本心，尋找孩童時期的真，慢慢地挖掘、尋找那些被深藏的故事，一同來感受木業的興衰起落，與北港春的蛻變與新生，並深刻體驗來自北港在地的生活文化，創造專屬於您與這塊土地的連結。",
      "Description": "生命與土地是需要和諧共處共榮，透過了解過往先人的生活痕跡，尋找可能的未來。「北港春」秉持著「人才傳藝，據點維新」的精神，透過與捷克藝術家「海大海」合作，一步一腳印，胼手胝足打造園區每一方寸，等您用心來探索品味，找到屬於您自己的美好回憶。   現代生活不僅是物質生活條件的追求，更重要的是精神上的豐盈滿足。旅遊可以是休閒、放鬆、享受，更可以是重要的精神糧食，期待您來「北港春」與我們一起回到本心，尋找孩童時期的真，慢慢地挖掘、尋找那些被深藏的故事，一同來感受木業的興衰起落，與北港春的蛻變與新生，並深刻體驗來自北港在地的生活文化，創造專屬於您與這塊土地的連結。",
      "Phone": "886-5-7831632",
      "Address": "雲林縣北港鎮劉厝里53-1號",
      "ZipCode": "651",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/old/20180709045823.jpg",
        "PictureDescription1": "北港春生活園區"
      },
      "Position": {
        "PositionLon": 120.29229736328125,
        "PositionLat": 23.59136962890625,
        "GeoHash": "wsjw1qdjt"
      },
      "ParkingPosition": {},
      "TicketInfo": "入園清潔費100元，可折抵消費50元。",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000093",
      "ScenicSpotName": "Gem Shop真金店",
      "DescriptionDetail": "隱藏在雲林虎尾小鎮的美學新地標 一家老診所的歇業停滯，促成了一間老字號銀樓的轉型。 對於空間，我們很用心打造一個優雅的環境，對於產品更增加了設計感和多元性。 這半個年頭，在雲林虎尾這小鎮上，或許還有許多人因為新的「Gem Shop真金店」太「特別」而望之怯步，也有很多返鄉的，來旅遊的人們反而因為我們的與眾不同而好奇地推開大門; 這個城鎮需要改變，而最基本的就是從自身做起，你/妳是，我們也是；都是可以成為其中的一股力量。嘗試與蛻變是需要勇氣而孤獨的，「Gem Shop真金店」只是很單純的想把「美學」落實在生活的美個角落。 我們踏出了第一步，也需要你/妳們勇敢的踏進你/妳的第一步，給予我們認同以及鼓勵。期待您的到來！ 《營業項目：珠寶設計訂製/鑽石婚戒/黃金買賣/設計師金工手作/設計飾品》",
      "Description": "隱藏在雲林虎尾小鎮的美學新地標 一家老診所的歇業停滯，促成了一間老字號銀樓的轉型。 對於空間，我們很用心打造一個優雅的環境，對於產品更增加了設計感和多元性。 這半個年頭，在雲林虎尾這小鎮上，或許還有許多人因為新的「Gem Shop真金店」太「特別」而望之怯步，也有很多返鄉的，來旅遊的人們反而因為我們的與眾不同而好奇地推開大門; 這個城鎮需要改變，而最基本的就是從自身做起，你/妳是，我們也是；都是可以成為其中的一股力量。嘗試與蛻變是需要勇氣而孤獨的，「Gem Shop真金店」只是很單純的想把「美學」落實在生活的美個角落。 我們踏出了第一步，也需要你/妳們勇敢的踏進你/妳的第一步，給予我們認同以及鼓勵。期待您的到來！ 《營業項目：珠寶設計訂製/鑽石婚戒/黃金買賣/設計師金工手作/設計飾品》",
      "Phone": "886-5-6313537",
      "Address": "雲林縣虎尾鎮新興路35號",
      "ZipCode": "632",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/old/20180709050402.jpg",
        "PictureDescription1": "Gem Shop真金店"
      },
      "Position": {
        "PositionLon": 120.43489837646484,
        "PositionLat": 23.708759307861328,
        "GeoHash": "wsjwus418"
      },
      "ParkingPosition": {},
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000094",
      "ScenicSpotName": "炎卿木偶雕刻社",
      "DescriptionDetail": "炎卿的起源：  炎卿木偶彫刻社成立於民國63年，由徐炎卿先生一手創立而成。   徐炎卿先生，民國40年7月出生於雲林縣古坑鄉，由於小時即喜歡在木頭上雕刻一些人物，日久後即無師自通的能將木頭雕出栩栩如生的木偶頭。再用彩筆繪出自己幻想世界中的各種人物，且個個神韻生動，因而一頭闖進木偶的雕刻世界。",
      "Description": "炎卿的起源：  炎卿木偶彫刻社成立於民國63年，由徐炎卿先生一手創立而成。   徐炎卿先生，民國40年7月出生於雲林縣古坑鄉，由於小時即喜歡在木頭上雕刻一些人物，日久後即無師自通的能將木頭雕出栩栩如生的木偶頭。再用彩筆繪出自己幻想世界中的各種人物，且個個神韻生動，因而一頭闖進木偶的雕刻世界。",
      "Phone": "886-5-5974041",
      "Address": "雲林縣斗南鎮文昌路248號",
      "ZipCode": "630",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/old/20180709050835.jpg",
        "PictureDescription1": "炎卿木偶雕刻社"
      },
      "Position": {
        "PositionLon": 120.55139923095703,
        "PositionLat": 23.62989044189453,
        "GeoHash": "wsjwrjwy5"
      },
      "ParkingPosition": {},
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000095",
      "ScenicSpotName": "織雲館",
      "DescriptionDetail": "織雲館位在斗六竹圍子工業區，為紡織產業綜合研究所的分支單位，以推廣台灣優質紡織品、深化紡織品設計與推動製造業服務化為目標。  取名織雲，有織就雲林的直接意義；織為現實的運作，理性的呈現，雲為夢想的引申，感性的抒發，其內在意涵在於連結理性與感性以實現夢想；希望能透過織雲館，告訴你台灣紡織的好，提供你台灣紡織的優，讓你與台灣紡織更親近，體驗身邊紡織品的美妙。  織雲館於102年5月15日正式開幕，以預約的方式開放參觀；不定期舉辦成果展示與促銷活動；藉由機台導覽讓參觀者明瞭紡織品的製造流程，詳細的解說讓民眾認識紡織品的應用與紡織品的流行時尚；蒐羅優質台灣製產品展示與銷售，提供台灣優勢的紡織製造業一個新的行銷通路。",
      "Description": "織雲館位在斗六竹圍子工業區，為紡織產業綜合研究所的分支單位，以推廣台灣優質紡織品、深化紡織品設計與推動製造業服務化為目標。  取名織雲，有織就雲林的直接意義；織為現實的運作，理性的呈現，雲為夢想的引申，感性的抒發，其內在意涵在於連結理性與感性以實現夢想；希望能透過織雲館，告訴你台灣紡織的好，提供你台灣紡織的優，讓你與台灣紡織更親近，體驗身邊紡織品的美妙。  織雲館於102年5月15日正式開幕，以預約的方式開放參觀；不定期舉辦成果展示與促銷活動；藉由機台導覽讓參觀者明瞭紡織品的製造流程，詳細的解說讓民眾認識紡織品的應用與紡織品的流行時尚；蒐羅優質台灣製產品展示與銷售，提供台灣優勢的紡織製造業一個新的行銷通路。",
      "Phone": "886-5-5519899 #9",
      "Address": "雲林縣斗六市科加路20號",
      "ZipCode": "640",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/old/20180709051321.jpg",
        "PictureDescription1": "織雲館"
      },
      "Position": {
        "PositionLon": 120.54550170898438,
        "PositionLat": 23.735960006713867,
        "GeoHash": "wsjxp0fxc"
      },
      "Class1": "其他",
      "ParkingInfo": "有停車場",
      "ParkingPosition": {},
      "TicketInfo": "免費參觀",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000096",
      "ScenicSpotName": "北港工藝坊",
      "DescriptionDetail": "百年藝鎮，巷弄藏文化！曾是稅務分局舊宿舍，現在是人稱百年藝鎮的北港鎮工藝產業中心。鄰近將酒甕砌築紅磚的甕牆，集結當地文史工作者和傳統工藝產業，輻射出北港市區處處驚喜的巷弄文化。北港工藝坊建於西元1964年，是北港甕牆的所在，也是稅務分局舊宿舍地址，位於朝天宮附近的巷弄內，於2013年12月20日正式開館，是以北港宗教工藝產業為主體的據點，保留著50年代街巷老屋的古樸韻味，還增添了許多文藝氣息，吸引地工藝師、地方文史工作者以及喜愛歷史人文旅遊的民眾前來了解北港地方傳統與宗教工藝之美。",
      "Description": "百年藝鎮，巷弄藏文化！曾是稅務分局舊宿舍，現在是人稱百年藝鎮的北港鎮工藝產業中心。鄰近將酒甕砌築紅磚的甕牆，集結當地文史工作者和傳統工藝產業，輻射出北港市區處處驚喜的巷弄文化。",
      "Phone": "886-5-7834595",
      "Address": "雲林縣北港鎮共和街2號",
      "ZipCode": "651",
      "OpenTime": "10:00-16:00一二公休",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/old/20180709051707.jpg",
        "PictureDescription1": "北港工藝坊",
        "PictureUrl2": "https://tour.yunlin.gov.tw/public/upload/old/20180709051710.jpg",
        "PictureDescription2": "北港工藝坊",
        "PictureUrl3": "https://tour.yunlin.gov.tw/public/upload/old/20180709051713.jpg",
        "PictureDescription3": "北港工藝坊"
      },
      "MapUrl": "https://goo.gl/bWLMsF",
      "Position": {
        "PositionLon": 120.30349731445312,
        "PositionLat": 23.566709518432617,
        "GeoHash": "wsjw1d4q4"
      },
      "ParkingInfo": "有停車場",
      "ParkingPosition": {},
      "TicketInfo": "免費參觀",
      "Keyword": "北港工藝坊,Beigang Craft",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000097",
      "ScenicSpotName": "北港-武德宮樂咖啡",
      "DescriptionDetail": "信仰。人文。樂咖啡  宗教是北港的印記，高聳的牌樓是北港的大門，信仰跟人文、傳統跟現代，在此交會  用最傳統的元素、堆砌出最時尚的人文咖啡館  Le Cafe' , 掛上雲嘉唯一的illy紅色招牌，代表每杯都是萃自完美烘培的香醇咖啡  即日起，飄香台19線，讓你，樂在咖啡～～  義式精萃咖啡、法式精緻甜點、美式精神Bagel。",
      "Description": "信仰。人文。樂咖啡  宗教是北港的印記，高聳的牌樓是北港的大門，信仰跟人文、傳統跟現代，在此交會  用最傳統的元素、堆砌出最時尚的人文咖啡館  Le Cafe' , 掛上雲嘉唯一的illy紅色招牌，代表每杯都是萃自完美烘培的香醇咖啡  即日起，飄香台19線，讓你，樂在咖啡～～  義式精萃咖啡、法式精緻甜點、美式精神Bagel。",
      "Phone": "886-5-7839620",
      "Address": "雲林縣北港鎮華勝路330號",
      "ZipCode": "651",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/old/20180709052231.jpeg",
        "PictureDescription1": "北港-武德宮樂咖啡"
      },
      "Position": {
        "PositionLon": 120.29910278320312,
        "PositionLat": 23.581010818481445,
        "GeoHash": "wsjw1kz1k"
      },
      "ParkingInfo": "附設停車場",
      "ParkingPosition": {},
      "TicketInfo": "NT:0-300",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000098",
      "ScenicSpotName": "蔦松客棧",
      "DescriptionDetail": "水林鄉蔦松國中附近，有一間不起眼的小餐館  外表以竹子搭建裝飾，小小招牌寫著「蔦松客棧」  老闆黃文俊七年前從北部回鄉開店  便成為在地人口耳相傳的美食基地  充滿藝術細胞的黃文俊  把自家的三合院布置成五○年代風格的鄉村餐廳  老歌星海報、唱盤音樂、大紅燈籠、老舊家具  還有「檢舉匪諜，政府有獎」等  各種早年政令宣導看板走進來彷若時空倒流。    店內的料理都是家常菜，為了確保新鮮  堅持使用在地食材  「食物里程」盡量控制在五公里內  諸如口湖鰻魚、台灣鯛、在地土雞、鱔魚等  後院空地還種了茄子、辣椒、木瓜等蔬果隨時取用  各種在地食材在黃文俊手裡  不拘一格，用創意與美味留住老饕的回憶。",
      "Description": "水林鄉蔦松國中附近，有一間不起眼的小餐館  外表以竹子搭建裝飾，小小招牌寫著「蔦松客棧」  老闆黃文俊七年前從北部回鄉開店  便成為在地人口耳相傳的美食基地  充滿藝術細胞的黃文俊  把自家的三合院布置成五○年代風格的鄉村餐廳  老歌星海報、唱盤音樂、大紅燈籠、老舊家具  還有「檢舉匪諜，政府有獎」等  各種早年政令宣導看板走進來彷若時空倒流。    店內的料理都是家常菜，為了確保新鮮  堅持使用在地食材  「食物里程」盡量控制在五公里內  諸如口湖鰻魚、台灣鯛、在地土雞、鱔魚等  後院空地還種了茄子、辣椒、木瓜等蔬果隨時取用  各種在地食材在黃文俊手裡  不拘一格，用創意與美味留住老饕的回憶。",
      "Phone": "886-9-35114228",
      "Address": "雲林縣水林鄉松北村蔦松路8號",
      "ZipCode": "652",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/old/20180709052809.jpg",
        "PictureDescription1": "蔦松客棧"
      },
      "Position": {
        "PositionLon": 120.23100280761719,
        "PositionLat": 23.51590919494629,
        "GeoHash": "wsjmzbvw1"
      },
      "ParkingInfo": "路邊停車",
      "ParkingPosition": {},
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000099",
      "ScenicSpotName": "幽情谷",
      "DescriptionDetail": "尋幽寄情，谷道輕旅行循清溪步道、水濂洞步道進入，全長約1.3公里。新整建的鋼構步道沿溪水而建，平行於急湍小瀑和特殊地質構造，直穿溪谷間，有壺穴及化石為伴，行程幽靜清涼。幽情谷步道是草嶺十景的重要景點，四處還有許多小瀑、急湍，都是長年溪水沖激岩石所成之結果， 幽情谷景點正如其名，幽靜閑逸，情懷若谷，現已整建好木製步道加上欄杆，供遊客來此休憩健走，走在道上聽聞水聲侵蝕岩石的強烈交響，就像與水爭道一般。",
      "Description": "尋幽寄情，谷道輕旅行循清溪步道、水濂洞步道進入，全長約1.3公里。新整建的鋼構步道沿溪水而建，平行於急湍小瀑和特殊地質構造，直穿溪谷間，有壺穴及化石為伴，行程幽靜清涼。",
      "Phone": "886-5-5831456",
      "Address": "古坑鄉",
      "ZipCode": "646",
      "OpenTime": "24HR",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/old/20181029020623.jpg",
        "PictureDescription1": "幽情谷"
      },
      "Position": {
        "PositionLon": 120.69400024414062,
        "PositionLat": 23.58485984802246,
        "GeoHash": "wsjy4mqxy"
      },
      "Class1": "自然風景類",
      "ParkingInfo": "路邊停車",
      "ParkingPosition": {},
      "TicketInfo": "免費參觀",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000100",
      "ScenicSpotName": "石壁村-木馬古道",
      "DescriptionDetail": "位於雲林縣古坑鄉，是雲林境內海拔最高的山村  其中石壁木馬古道素來僅為少數遊客驚豔之處  古道沿線目前植被鬱閉而具有保護作用  故在開發時採以低度開發  發展小眾深度而特色旅遊方式，減緩對當地環境的衝擊    木馬古道分區規劃如下：  木馬古道入口區(0-450公尺)：  木馬古道入口區為本區主要之景觀遊憩據點  目前已整建五元二角亭、農池潭與竹炭窯可供遊樂玩賞    原生闊葉林復育區：  本區於步道450-1000公尺處，主要為孟宗竹林相    孟宗竹林經營計畫：  於步道1000-2000公尺處，持續為孟宗竹林相  經社區竹林疏伐並設置觀景台後，已有不同氣象    杉木經營區：  本區於步道2000-2400公尺處，主要為杉木孟宗竹與闊葉樹林相混合林  步道終點有高空竹木棧道，可方便遊客從高處觀賞柳杉林  綜觀木馬道遺跡，依希穿越林間之蜿蜒過程",
      "Description": "位於雲林縣古坑鄉，是雲林境內海拔最高的山村  其中石壁木馬古道素來僅為少數遊客驚豔之處  古道沿線目前植被鬱閉而具有保護作用  故在開發時採以低度開發  發展小眾深度而特色旅遊方式，減緩對當地環境的衝擊    木馬古道分區規劃如下：  木馬古道入口區(0-450公尺)：  木馬古道入口區為本區主要之景觀遊憩據點  目前已整建五元二角亭、農池潭與竹炭窯可供遊樂玩賞    原生闊葉林復育區：  本區於步道450-1000公尺處，主要為孟宗竹林相    孟宗竹林經營計畫：  於步道1000-2000公尺處，持續為孟宗竹林相  經社區竹林疏伐並設置觀景台後，已有不同氣象    杉木經營區：  本區於步道2000-2400公尺處，主要為杉木孟宗竹與闊葉樹林相混合林  步道終點有高空竹木棧道，可方便遊客從高處觀賞柳杉林  綜觀木馬道遺跡，依希穿越林間之蜿蜒過程",
      "Phone": "886-5-5831456",
      "Address": "雲林縣古坑鄉草嶺村石壁村",
      "ZipCode": "646",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/old/20180712112232.jpg",
        "PictureDescription1": "石壁村-木馬古道"
      },
      "Position": {
        "PositionLon": 120.62090301513672,
        "PositionLat": 23.633010864257812,
        "GeoHash": "wsjy2y32q"
      },
      "Class1": "自然風景類",
      "ParkingInfo": "路邊停車",
      "ParkingPosition": {},
      "TicketInfo": "免費",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000101",
      "ScenicSpotName": "北港「甕牆」",
      "DescriptionDetail": "甕牆為開設土壟間（碾米廠）、油車（油廠）巨商顏東義第宅圍牆一部份  該第宅建於道光年間，於光緒三十一年大地震後修建第宅甕牆被留下一部份",
      "Description": "甕牆為開設土壟間（碾米廠）、油車（油廠）巨商顏東義第宅圍牆一部份  該第宅建於道光年間，於光緒三十一年大地震後修建第宅甕牆被留下一部份",
      "Phone": "886-5-7834595",
      "Address": "雲林縣北港鎮共和街2號",
      "ZipCode": "651",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/old/20180712112957.jpg",
        "PictureDescription1": "北港「甕牆」",
        "PictureUrl2": "https://tour.yunlin.gov.tw/public/upload/old/20180712113001.jpg"
      },
      "Position": {
        "PositionLon": 120.30349731445312,
        "PositionLat": 23.566709518432617,
        "GeoHash": "wsjw1d4q4"
      },
      "ParkingInfo": "路邊停車",
      "ParkingPosition": {},
      "TicketInfo": "免費",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000103",
      "ScenicSpotName": "李萬居故居(李萬居精神啟蒙館)",
      "DescriptionDetail": "李萬居先生，號孟南，雲林縣口湖鄉梧北村人，生於1901年7月22日，幼時家境清寒，父親早逝，靠自修與苦學奠定其國學基礎，1924年在親友與村民資助下赴上海求學，1926年再赴法國留學，1932年取得巴黎大學文學院學位。 李萬居先生是台灣民主運動的先驅及啟蒙者，主張開放黨禁、報禁，推動司法改革並致力於民主政治改革不遺餘力，其一生追求台灣民主自由，積極投身地方政治，其爭取新聞自由與政治人權的精神，實令人敬佩。為了進一步落實政黨政治，促進台灣的民主自由，1950年與雷震等研籌組中國民主黨，雖在執政當局的威嚴高壓統治下功敗垂成；但其風範值得後人欽佩。1966年因糖尿病發作去世，享年66歲。目前位於雲林縣口湖鄉梧北村調天府旁的李萬居先生故居，已在地方人士積極爭取下，完成修繕並改建為李萬居精神啟蒙館，成為口湖鄉重要人文景點之一。",
      "Description": "李萬居先生，號孟南，雲林縣口湖鄉梧北村人，生於1901年7月22日，幼時家境清寒，父親早逝，靠自修與苦學奠定其國學基礎，1924年在親友與村民資助下赴上海求學，1926年再赴法國留學，1932年取得巴黎大學文學院學位。 李萬居先生是台灣民主運動的先驅及啟蒙者，主張開放黨禁、報禁，推動司法改革並致力於民主政治改革不遺餘力，其一生追求台灣民主自由，積極投身地方政治，其爭取新聞自由與政治人權的精神，實令人敬佩。為了進一步落實政黨政治，促進台灣的民主自由，1950年與雷震等研籌組中國民主黨，雖在執政當局的威嚴高壓統治下功敗垂成；但其風範值得後人欽佩。1966年因糖尿病發作去世，享年66歲。目前位於雲林縣口湖鄉梧北村調天府旁的李萬居先生故居，已在地方人士積極爭取下，完成修繕並改建為李萬居精神啟蒙館，成為口湖鄉重要人文景點之一。",
      "Phone": "886-5-7907857",
      "Address": "雲林縣口湖鄉梧北村復興路188號",
      "ZipCode": "653",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/old/20180712114327.jpg",
        "PictureDescription1": "李萬居故居(李萬居精神啟蒙館)"
      },
      "Position": {
        "PositionLon": 120.19039916992188,
        "PositionLat": 23.550750732421875,
        "GeoHash": "wsjmyzrcp"
      },
      "Class1": "其他",
      "ParkingInfo": "路邊停車",
      "ParkingPosition": {},
      "TicketInfo": "全部免費",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000104",
      "ScenicSpotName": "奇香老沉(香茶藝術)",
      "DescriptionDetail": "奇香老沉承襲了香道千年文化，堅持使用天然原料加工製成  以天然素材，環保製法做出更淡雅細緻的現代香精品，致力將馨香傳遍每一個角落  商品種類繁多，包含了香材、藝品、佛珠、墜飾、各式香品  可供典藏、薰香、佩戴、祭祀  沉香素有安神寧心之作用，於居家空間，改善氣場幫助睡眠  於辦公場所使人頭腦清晰、心思縝密，更有利於工作效能之提升  於修行，心性趨於沉靜、六根敏銳  沉香是上天賜予的珍寶，不論用途為何皆帶來諸多益處，將沉香發揚光大  落實在居家生活中，是奇香老沉的使命更是一種榮耀",
      "Description": "奇香老沉承襲了香道千年文化，堅持使用天然原料加工製成  以天然素材，環保製法做出更淡雅細緻的現代香精品，致力將馨香傳遍每一個角落  商品種類繁多，包含了香材、藝品、佛珠、墜飾、各式香品  可供典藏、薰香、佩戴、祭祀  沉香素有安神寧心之作用，於居家空間，改善氣場幫助睡眠  於辦公場所使人頭腦清晰、心思縝密，更有利於工作效能之提升  於修行，心性趨於沉靜、六根敏銳  沉香是上天賜予的珍寶，不論用途為何皆帶來諸多益處，將沉香發揚光大  落實在居家生活中，是奇香老沉的使命更是一種榮耀",
      "Phone": "886-5-6221117",
      "Address": "雲林縣虎尾鎮文科路392號",
      "ZipCode": "632",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/old/20180712115125.jpg",
        "PictureDescription1": "奇香老沉(香茶藝術)"
      },
      "Position": {
        "PositionLon": 120.44290161132812,
        "PositionLat": 23.715930938720703,
        "GeoHash": "wsjwutrg7"
      },
      "Class1": "其他",
      "ParkingInfo": "附近設有停車場或路邊停車",
      "ParkingPosition": {},
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000106",
      "ScenicSpotName": "持法媽祖宮",
      "DescriptionDetail": "持法媽祖廟    主前殿：湄州天上聖母　　後殿：關夫子（五文昌）    持法媽祖廟的建築物古色古香，環境清幽，藉由人文的元素，營造出靈性的空間，拋捨塵囂、浮華、賦予了淨化心靈的功能，無形中透露著一股靈秀之氣，引領人神之間的亙動，透過景觀的語彙與風格，將心靈導入視覺，整體景觀成功的將傳統宗教信仰，與藝術結合。悠遊其間，享受一場視覺與心靈的旅行。",
      "Description": "持法媽祖廟    主前殿：湄州天上聖母　　後殿：關夫子（五文昌）    持法媽祖廟的建築物古色古香，環境清幽，藉由人文的元素，營造出靈性的空間，拋捨塵囂、浮華、賦予了淨化心靈的功能，無形中透露著一股靈秀之氣，引領人神之間的亙動，透過景觀的語彙與風格，將心靈導入視覺，整體景觀成功的將傳統宗教信仰，與藝術結合。悠遊其間，享受一場視覺與心靈的旅行。",
      "Phone": "886-5-6226020",
      "Address": "雲林縣虎尾鎮頂溪里西園46號",
      "ZipCode": "632",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/old/20180712013628.jpg",
        "PictureDescription1": "持法媽祖宮"
      },
      "Position": {
        "PositionLon": 120.46530151367188,
        "PositionLat": 23.73261070251465,
        "GeoHash": "wsjxj22hk"
      },
      "ParkingPosition": {},
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000109",
      "ScenicSpotName": "北港故事館",
      "DescriptionDetail": "北港故事館於101年3月23日隆重開幕，其創立宗旨在於弘揚媽祖博愛精神，傳承即將散失的在地文化遺產，匯集固有匠、藝師，灌注新活力，並與熱心人士共同協力，將源遠流長的地方特色，原貌原味的呈現，提供民俗史家對古文物的考證與追思。     北港故事館是公益導向的場所，和朝天宮的宗旨相合。如台灣學子吳建衡，在朝天宮與本館的支持下，以台灣三太子神偶、及八家將面具等傳統民俗文化，跨越亞、非、南美等諸國，以行動宣揚媽祖文化，展開國民外交，今後將擴大層面，期許北港媽祖能榮登國際民俗舞台。",
      "Description": "北港故事館於101年3月23日隆重開幕，其創立宗旨在於弘揚媽祖博愛精神，傳承即將散失的在地文化遺產，匯集固有匠、藝師，灌注新活力，並與熱心人士共同協力，將源遠流長的地方特色，原貌原味的呈現，提供民俗史家對古文物的考證與追思。     北港故事館是公益導向的場所，和朝天宮的宗旨相合。如台灣學子吳建衡，在朝天宮與本館的支持下，以台灣三太子神偶、及八家將面具等傳統民俗文化，跨越亞、非、南美等諸國，以行動宣揚媽祖文化，展開國民外交，今後將擴大層面，期許北港媽祖能榮登國際民俗舞台。",
      "Phone": "886-5-7839599",
      "Address": "雲林縣北港鎮新德路116號",
      "ZipCode": "651",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/old/20180712014756.jpg",
        "PictureDescription1": "北港故事館"
      },
      "Position": {
        "PositionLon": 120.30439758300781,
        "PositionLat": 23.587190628051758,
        "GeoHash": "wsjw1tfvr"
      },
      "Class1": "遊憩類",
      "ParkingPosition": {},
      "TicketInfo": "請電話洽詢",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000110",
      "ScenicSpotName": "北港牛墟",
      "DescriptionDetail": "由於目前台灣進入工商社會機械化的耕耘機，運貨的鐵牛車，逐漸取代耕牛。牛的社會價值已大不如前，牛墟與牛販的重要性，也相對的減弱了。北港牛墟是台灣僅存的兩處牛墟之一，位於北港溪畔，北港大橋西側，陽曆每旬3、6、9日一大清早開市，中午收市。昔日最高交易量曾經高達千頭，如今雖已少有牛隻買賣，卻依舊是雲嘉平原，老農民和遊客最愛閒逛的大市集，販售民生用品、小吃、文藝品、二手電機工具等。",
      "Description": "由於目前台灣進入工商社會機械化的耕耘機，運貨的鐵牛車，逐漸取代耕牛。牛的社會價值已大不如前，牛墟與牛販的重要性，也相對的減弱了。北港牛墟是台灣僅存的兩處牛墟之一，位於北港溪畔，北港大橋西側，陽曆每旬3、6、9日一大清早開市，中午收市。昔日最高交易量曾經高達千頭，如今雖已少有牛隻買賣，卻依舊是雲嘉平原，老農民和遊客最愛閒逛的大市集，販售民生用品、小吃、文藝品、二手電機工具等。",
      "Phone": "886-5-7837427",
      "Address": "雲林縣北港鎮大橋下的牛墟",
      "ZipCode": "651",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/old/20180712015409.jpg",
        "PictureDescription1": "北港牛墟"
      },
      "Position": {
        "PositionLon": 120.30000305175781,
        "PositionLat": 23.56471061706543,
        "GeoHash": "wsjw13zf3"
      },
      "Class1": "其他",
      "ParkingPosition": {},
      "TicketInfo": "免費參觀",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    },
    {
      "ScenicSpotID": "C1_376490000A_000111",
      "ScenicSpotName": "汎歌保養品科技美學館",
      "DescriptionDetail": "位於斗六工業區的汎歌保養品科技美學館，從創業初期即針對國人主要常見的皮膚問題深入研究，而研發生產可解決各個年齡層之肌膚問題的各種系列產品，震撼專業美容沙龍業界，專業美容師口中提到「汎歌」，就代表著「問題肌膚的權威」 。 廠區備有舒適的接待空間簡報室、生產流程參觀廊道、貴賓體驗室、藝文走廊、產品體驗區等.廠區展示了30年來保養品製造的歷史軌跡，從草創初期的艱辛創業過程到現在跨越海外市場的開拓，已開創立足台灣行銷海外的新局面。 汎歌保養品科技美學館，不惜成本採用高品質的頂級原料、最尖端的BIO生物科技產品，並在台灣採用完全符合GMP規範的工廠製作填充包裝；最先進的GMP設計，成為國內頗具規模的專業化粧品工廠，足與國際廠商相媲美。",
      "Description": "位於斗六工業區的汎歌保養品科技美學館，從創業初期即針對國人主要常見的皮膚問題深入研究，而研發生產可解決各個年齡層之肌膚問題的各種系列產品，震撼專業美容沙龍業界，專業美容師口中提到「汎歌」，就代表著「問題肌膚的權威」 。   廠區備有舒適的接待空間簡報室、生產流程參觀廊道、貴賓體驗室、藝文走廊、產品體驗區等….廠區展示了30年來保養品製造的歷史軌跡，從草創初期的艱辛創業過程到現在跨越海外市場的開拓，已開創立足台灣行銷海外的新局面。     汎歌保養品科技美學館，不惜成本採用高品質的頂級原料、最尖端的BIO生物科技產品，並在台灣採用完全符合GMP規範的工廠製作填充包裝；最先進的GMP設計，成為國內頗具規模的專業化粧品工廠，足與國際廠商相媲美。",
      "Phone": "886-5-5571138#42",
      "Address": "雲林縣斗六市工業路79號",
      "ZipCode": "640",
      "Picture": {
        "PictureUrl1": "https://tour.yunlin.gov.tw/public/upload/old/20180712022340.jpg",
        "PictureDescription1": "汎歌保養品科技美學館"
      },
      "Position": {
        "PositionLon": 120.58920288085938,
        "PositionLat": 23.722320556640625,
        "GeoHash": "wsjybnd2s"
      },
      "Class1": "其他",
      "ParkingInfo": "路邊停車",
      "ParkingPosition": {},
      "TicketInfo": "免費",
      "City": "雲林縣",
      "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
      "UpdateTime": "2024-05-31T03:14:56+08:00"
    }
  ];*/

  return (
    <>
    <div className="bg-cyan-800">
      <div className="container mx-auto">
      <Navbar fluid className="bg-cyan-800">
        <NavbarBrand as={Link} href="/">
          <img src="https://www.yuntech.edu.tw/images/website_png/Group_640.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">YunTech Travale</span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="#" className="text-white">
            <span className="px-4 py-2 hover:text-yellow-500 hover:border-yellow-500 hover:border-b-2">交通</span>
          </NavbarLink>
          <NavbarLink as={Link} href="#" className="text-white">
            景點
          </NavbarLink>
          <NavbarLink href="#" className="text-white">關於我們</NavbarLink>
        </NavbarCollapse>
        <DarkThemeToggle />
      </Navbar>
      </div>
    </div>

      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img src="/banner/banner-1.jpg" alt="由 WU PEI HSUAN - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=110297869" />
          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
        </Carousel>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto grid grid-cols-4 gap-4">
          { items.map( item =>
          <Card
            className="max-w-sm"
            imgAlt={item.Picture.PictureDescription1}
            imgSrc={item.Picture.PictureUrl1}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.ScenicSpotName}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {item.DescriptionDetail}
            </p>
            <Button>
              Read more
              <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
          )}
        </div>
      </div>

      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          { items.map( item =>
            <CustomCard item={item}/>
          )}
        </div>
      </div>
      

      <Footer container>
      <FooterCopyright href="#" by="Flowbite™" year={2022} />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
      </Footer>
    </>
  );
}
