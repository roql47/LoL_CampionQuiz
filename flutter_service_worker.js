'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d66944c48b15df668be39e02700cfa00",
"assets/AssetManifest.bin.json": "b94fed1573911145b6d86291695d94ca",
"assets/AssetManifest.json": "0b6e1c51904873169a95705803652510",
"assets/assets/image/image1.png": "a1f1edcaeb675ffb803855daf8e4c0a1",
"assets/assets/image/image10.png": "8cf93727cbeae41a7bfe675cc7ccd789",
"assets/assets/image/image100.png": "82cc0e23003a09807b9b09b5b45d8cde",
"assets/assets/image/image101.png": "6a52b6594f1f7975664c1623f36068cf",
"assets/assets/image/image102.png": "cf201131c8bc0ea796793cfe373c50a2",
"assets/assets/image/image103.png": "2464b630a78730b1a73f8a80d0db85fa",
"assets/assets/image/image104.png": "524784dc2e48d4a920e14fbfdf943d0c",
"assets/assets/image/image105.png": "66ceea91ac8223c0dd041b277331287b",
"assets/assets/image/image106.png": "3b35bfe6ffd3b8984ee4d050d6503d2a",
"assets/assets/image/image107.png": "9b12dbccf164841a3b5a6b5cbbbbcede",
"assets/assets/image/image108.png": "976c42bc922113af539154810b3705ff",
"assets/assets/image/image109.png": "60dea792231f281e630a83b2a250a7dd",
"assets/assets/image/image11.png": "5296e254d16ae25351dd7b334acaf75e",
"assets/assets/image/image110.png": "3320f22778393bf36d18c6481547473d",
"assets/assets/image/image111.png": "8cdfd9bb9f11785f62beb2853bcdac3c",
"assets/assets/image/image112.png": "002ced752ff6dcd38d99a69eda11c212",
"assets/assets/image/image113.png": "7176cadf0e89413380b8a1b3d57249d5",
"assets/assets/image/image114.png": "ef56a28689c8252a706c10aec1e180b1",
"assets/assets/image/image115.png": "cc96d828d0b5b97225057aa4448d4120",
"assets/assets/image/image116.png": "a916643ceef685b1861bf86ea97459a8",
"assets/assets/image/image117.png": "077cc6af84c697d7de2d25b8b3d79bab",
"assets/assets/image/image118.png": "0d2992ab1c0ffcddd5fee49badef42b3",
"assets/assets/image/image119.png": "3fea1119bdb23cab79ef45717905570f",
"assets/assets/image/image12.png": "828f829e4641f3c41783f123c68bf139",
"assets/assets/image/image120.png": "f96dfd2644c0958ff343316d55ea734c",
"assets/assets/image/image121.png": "acc776fcdfdf909cb3c38889f0e9ebb3",
"assets/assets/image/image122.png": "8fb481b928403bd814a8480ccf647506",
"assets/assets/image/image123.png": "5fbbe477a4e5764eb35581fbe730ce17",
"assets/assets/image/image124.png": "c17a2749d0010dd760d39dbe1dc8e908",
"assets/assets/image/image125.png": "f6715a0fdc4c0f7049e218c4021f1286",
"assets/assets/image/image126.png": "f96dfd2644c0958ff343316d55ea734c",
"assets/assets/image/image127.png": "f6f4e94953aeaab1d95b93e4833551c8",
"assets/assets/image/image128.png": "6add8663c9b02a26b80cc52410c7a7fa",
"assets/assets/image/image129.png": "f5e07d07a993657f80e7f17e558fd347",
"assets/assets/image/image13.png": "3859dc4e1d3b7f57d243123ca44e8af4",
"assets/assets/image/image130.png": "62fe7468f4a019cb74be1cbbee7cc911",
"assets/assets/image/image131.png": "c6907d8fb8ee14f1e7ef2a935de3025f",
"assets/assets/image/image132.png": "a91469d9303d26e7626ee9565cbceac8",
"assets/assets/image/image133.png": "d37829e78b51478bcf1e8dbd72a395f7",
"assets/assets/image/image134.png": "9aaa9ca09caad26946fd34827df7bd67",
"assets/assets/image/image135.png": "36470ae0bdfccc1675091bf8345e0540",
"assets/assets/image/image136.png": "a03653801cee7bc088a813f1366ee31d",
"assets/assets/image/image137.png": "94fa127bc6b547db9bd7f4376c106d73",
"assets/assets/image/image138.png": "717e77cca911b44ab0011916239fa171",
"assets/assets/image/image139.png": "0530bdcba3110651d79be5688028b4d3",
"assets/assets/image/image14.png": "0f003923f4054fe6fed6d5076beb63cb",
"assets/assets/image/image140.png": "59ba828acdafc566b1edd00e6ec6ff77",
"assets/assets/image/image141.png": "b6676055ce15a6326fd4bddaf8758962",
"assets/assets/image/image142.png": "2367ab1d6925a4ed8bf0f0d15c39eb1e",
"assets/assets/image/image143.png": "63c4b7bd3eedc4ff43553bcc145b4ba2",
"assets/assets/image/image144.png": "f39924e2c84953c46e0f76e9bb5491d3",
"assets/assets/image/image145.png": "d59d08e43adb10e59eb4515aa20470b7",
"assets/assets/image/image146.png": "57176d1936f7caafeec7da61c88276d6",
"assets/assets/image/image147.png": "5682c3cc427aa823676ba300f574773a",
"assets/assets/image/image148.png": "f1e6fa28cb14d272f3bdda6396dca2b7",
"assets/assets/image/image149.png": "9f954e18c385d5be0c8fde10cc31bfc4",
"assets/assets/image/image15.png": "fda8a9926e7832c2315f29b80eb5b0e7",
"assets/assets/image/image150.png": "738747448fad869dfce0ebeab824d6fd",
"assets/assets/image/image151.png": "9fd3ff717aef806bab1d5588e0243bd9",
"assets/assets/image/image152.png": "d3f3792014c53519f927c43e588dbb2a",
"assets/assets/image/image153.png": "e0636ffaabc4ee0ecadc0191d5397558",
"assets/assets/image/image154.png": "9fc62287cb68dad9819e3def9bae713b",
"assets/assets/image/image155.png": "c0b250ed4a1bbf79306a5b4b871b39a4",
"assets/assets/image/image156.png": "97a8257a28b897a841fa5d2511071b7e",
"assets/assets/image/image157.png": "d1b8afad08d1d2934a4933f636663fb0",
"assets/assets/image/image158.png": "10cc01a159430de3a433e3054a2a8d21",
"assets/assets/image/image159.png": "7b206bb2ae83958f79a8fbddfbb10024",
"assets/assets/image/image16.png": "e27f4eed6f7d418a5d5f50e139aed5f6",
"assets/assets/image/image160.png": "59065ebbb3a4c25544cd518eca634c31",
"assets/assets/image/image161.png": "a334373bacaca6f811d778e1240c23bd",
"assets/assets/image/image162.png": "b91ea5bc8881e4e090e1185c07606015",
"assets/assets/image/image163.png": "fcc4b98a1a0d8409f8e118106fe3dc16",
"assets/assets/image/image17.png": "ab88fb3380f2257d6514aecc4dc74a27",
"assets/assets/image/image18.png": "98c7a0b6796ff731b291d21e991a01d8",
"assets/assets/image/image19.png": "be8f77d38d3ce2ba8279b137209e05c2",
"assets/assets/image/image2.png": "cd2b33257de0d3f9ce1454a5afc86ac0",
"assets/assets/image/image20.png": "3b268fb9d8b9397c4c40a3870144f015",
"assets/assets/image/image21.png": "fe7c97a98e9364c906ed7745e76df531",
"assets/assets/image/image22.png": "73928f6e257a1577bfee546ee7d1e903",
"assets/assets/image/image23.png": "6b5bfc598f3b89f2c2fbfbf3045c38cf",
"assets/assets/image/image24.png": "8f525717eb2878277fa97f348f5413e9",
"assets/assets/image/image25.png": "e8dee397215fdc353cdbb1166e695639",
"assets/assets/image/image26.png": "25f2cddb200791f702240d1969efcab4",
"assets/assets/image/image27.png": "a2b59f43ca59102f09c6d29b118f851d",
"assets/assets/image/image28.png": "fb8ec3bbfe5455aa7b8480e46f820df0",
"assets/assets/image/image29.png": "697eba039f78529b076c07f523f23c76",
"assets/assets/image/image3.png": "69bd27afee5e56f92aef38dab470bed2",
"assets/assets/image/image30.png": "23baa9c83196c8a98fc809a00d91d7eb",
"assets/assets/image/image31.png": "46ed68d79763d1cf1d679fd70bb8f031",
"assets/assets/image/image32.png": "e972589b0b9766f5e6c36dc6ab8ef360",
"assets/assets/image/image33.png": "35f987a89faee67e5bc08104cbafe6f9",
"assets/assets/image/image34.png": "41782f8c5d6d0e0ae33a7426ac9e8a1a",
"assets/assets/image/image35.png": "211f3065b612e39531aaff89d966130e",
"assets/assets/image/image36.png": "ae9947dddd20812d4cc01ce3911a126b",
"assets/assets/image/image37.png": "c41c545fe103e0eaddcaccd488eddc6c",
"assets/assets/image/image38.png": "2b148d55744f00238d9e24544934f416",
"assets/assets/image/image39.png": "5d7cbb0d30e5c665413ee488548cb97e",
"assets/assets/image/image4.png": "d9abfe5dd1a91a0179333ac832929637",
"assets/assets/image/image40.png": "125d345ab9f0d9a473a59ca51944a69a",
"assets/assets/image/image41.png": "a9bad9965451707c8324c681af92f7c2",
"assets/assets/image/image42.png": "f6721a06c029cc09556a114d3ee2ffd1",
"assets/assets/image/image43.png": "74bdc77d0129717c433af90cdbea961f",
"assets/assets/image/image44.png": "7fc571054deee75decfc2583ea754eb5",
"assets/assets/image/image45.png": "9c2f115af2716f193e9eb71ca0f66167",
"assets/assets/image/image46.png": "994620949f7efd62e93934014e4414c8",
"assets/assets/image/image47.png": "e8443fe77d21954b4014dfa2691b7956",
"assets/assets/image/image48.png": "347ddf77771e69513990f44c6a3c4c48",
"assets/assets/image/image49.png": "c904971ff6763a74ffbb66641db4325c",
"assets/assets/image/image5.png": "3a1cc0922686044e8888cc8a575bed6e",
"assets/assets/image/image50.png": "991956c3123b1cef2c231a782c84e5e9",
"assets/assets/image/image51.png": "d4fd30cb231d8a9dd11dca1d35ddddb9",
"assets/assets/image/image52.png": "1f29167ddf1d0f0a0f133bee86e7b40b",
"assets/assets/image/image53.png": "4b3c24f5ebb65bf3d2b45975df87d8c2",
"assets/assets/image/image54.png": "c55cc1acd54fa8db9dc0c3f34b80c1ae",
"assets/assets/image/image55.png": "d5e8aacc2cac90edc57d32d2c6a6f088",
"assets/assets/image/image56.png": "8b28ec5b9f032a3126ed9d5f099a7d36",
"assets/assets/image/image57.png": "c7a4e00db1a7b5262962a05d1b4d5f0c",
"assets/assets/image/image58.png": "fafc4f4fe694439b43c3c2708bd9dc7e",
"assets/assets/image/image59.png": "3d2c2898580fda6b5a8679c14768998a",
"assets/assets/image/image6.png": "0831e615bfb4a107a68c8b1b40f0b84f",
"assets/assets/image/image60.png": "85360ac569146f2559172c81b5a35532",
"assets/assets/image/image61.png": "f13c4e175e5cfa01eee1317e71d88d31",
"assets/assets/image/image62.png": "25a38aea8a9ceef4fc712ea1c43f8ca8",
"assets/assets/image/image63.png": "ab39259721f3a104c504bc66ebcb4222",
"assets/assets/image/image64.png": "53354d059a380974f97b3b7afe2194bd",
"assets/assets/image/image65.png": "c20fb9afb57671f28ad624646c0e0555",
"assets/assets/image/image66.png": "478ec046680601daf7a8da2378cf9091",
"assets/assets/image/image67.png": "18318343e5744a5f1b712dc40b7251fa",
"assets/assets/image/image68.png": "4e6cfe7467127d0732c22ad5eb7c7703",
"assets/assets/image/image69.png": "59a61b33163ec01b9689942fb9179dbf",
"assets/assets/image/image7.png": "a9f025c2afde5c5eb6f26ddd67eddff9",
"assets/assets/image/image70.png": "d2addb35643b2dd7de8558176906a13b",
"assets/assets/image/image71.png": "1666f010022ef8e59af8fbd8e95225f2",
"assets/assets/image/image72.png": "4580a71228744e305ca6438a6ad5616c",
"assets/assets/image/image73.png": "1c7e3c6bb82c90c4654a455c09ce5013",
"assets/assets/image/image74.png": "5f039136f3e5e99f3e045b68d3d07d10",
"assets/assets/image/image75.png": "8ffe6cfa67fdce953ef21dcc1f4f580d",
"assets/assets/image/image76.png": "47cf2592ee66c842b7bb5275145cb0a9",
"assets/assets/image/image77.png": "3952976f97812e6a54f5b3c917860480",
"assets/assets/image/image78.png": "a374fc42faa0cb913a296cf1bed7b6fd",
"assets/assets/image/image79.png": "cf537dac8fdcfa3a676d9a6852e8bc19",
"assets/assets/image/image8.png": "7dd3ce78e243a56d90e4290ac4158476",
"assets/assets/image/image80.png": "7671c2dd3edb76eeec9a2094845d8676",
"assets/assets/image/image81.png": "dca69008f90a7a0ee9172fd01642aa90",
"assets/assets/image/image82.png": "4d3431c320046f26c0dcdbac782406a2",
"assets/assets/image/image83.png": "c1981e200eb379b627609c9e0427ba92",
"assets/assets/image/image84.png": "4bafc99b99cc833476d9fc46d2d20baa",
"assets/assets/image/image85.png": "b7fd261330ac8b72347c00befb28383b",
"assets/assets/image/image86.png": "6e1e70abd098f728f87d5aa8985a5f4a",
"assets/assets/image/image87.png": "a28787fe365ca0d8f1125742a7c094d6",
"assets/assets/image/image88.png": "d63d475d5b50b8d1c200e06e637412cd",
"assets/assets/image/image89.png": "367e80c60782f55decea7c6507eb98a4",
"assets/assets/image/image9.png": "62ecae276dbb24522ea9968fb76e03c2",
"assets/assets/image/image90.png": "12791982dbc61bd7ffcfb18d5d9382fe",
"assets/assets/image/image91.png": "bbcc564a4b3368666d221eb32ec2bbee",
"assets/assets/image/image92.png": "ac806cc88c531da4ad214be0c9a09ac4",
"assets/assets/image/image93.png": "1168b5104d083684568ce4eb8f7e8a91",
"assets/assets/image/image94.png": "78f78389bba885626ccccd6d1eeb56cb",
"assets/assets/image/image95.png": "1c17471bd844506425515772bb551b90",
"assets/assets/image/image96.png": "54e27c7d1650e1619a3d9582336c7a81",
"assets/assets/image/image97.png": "3164943a4e634e4da63f01412b303b8d",
"assets/assets/image/image98.png": "50df845caa6a17e76f2a5a395a0e0e9d",
"assets/assets/image/image99.png": "e7442649a733617e85f4f994e543bea2",
"assets/assets/source/sound1.mp3": "c83c24907f81d06da6e53a284f9054ef",
"assets/assets/source/sound10.mp3": "bd1c38ffaf6ac449369b598953c1a0da",
"assets/assets/source/sound100.mp3": "aa1fb072faaeb10ef70d29ba78ce9e80",
"assets/assets/source/sound101.mp3": "3f2ab06b72ad1562f7d77fda0ca4b2f0",
"assets/assets/source/sound102.mp3": "5cc2b311e04cf82ce5c20516901004c0",
"assets/assets/source/sound103.mp3": "cf227c0dd1c813b8d2d3b1fa350d41e0",
"assets/assets/source/sound104.mp3": "c954093be139dda0ad6faa8092a422cd",
"assets/assets/source/sound105.mp3": "d625e65bae513f7c995cc24bfb420d1d",
"assets/assets/source/sound106.mp3": "14872316d3da657438564894b4454ec3",
"assets/assets/source/sound107.mp3": "9ac7e67e5bf7ade26594ceeac9fc023b",
"assets/assets/source/sound108.mp3": "9cc23b9144ff8af7836d43eae53152fe",
"assets/assets/source/sound109.mp3": "f3e88d39a35cd8dd9febdbb2d3121a17",
"assets/assets/source/sound11.mp3": "28c5385992674bb1eae352646c720658",
"assets/assets/source/sound110.mp3": "2107b1d63446a92450540fc34ee2afed",
"assets/assets/source/sound111.mp3": "133d4349103b27c313a8c6b650612db5",
"assets/assets/source/sound112.mp3": "41b659e0aa1c44cc3f6df579619afdc0",
"assets/assets/source/sound113.mp3": "9f11213b40a19bbc9ea31b019fd83682",
"assets/assets/source/sound114.mp3": "68918196caeb3d22d541673e8f9a78a1",
"assets/assets/source/sound115.mp3": "8734a20222878598dfe91c7163e47733",
"assets/assets/source/sound116.mp3": "87d6e7ba7870fb9e95f24b8c9584d6f0",
"assets/assets/source/sound117.mp3": "004ca3319dd411c45428860763c97cd7",
"assets/assets/source/sound118.mp3": "545316c2484d3f6ca9bca129be9f5d71",
"assets/assets/source/sound119.mp3": "3fe01f9865f2a151f2358056c34e5e69",
"assets/assets/source/sound12.mp3": "acf2dd334606376edab5b02bd4434255",
"assets/assets/source/sound120.mp3": "c1d2bbfcc97b303d78a77fac2432ad4a",
"assets/assets/source/sound121.mp3": "e6373382b6e41f4ce5862215b46fbbcf",
"assets/assets/source/sound122.mp3": "cfaead0031074201e0194d2a915ed2f6",
"assets/assets/source/sound123.mp3": "501ab512dbb01f4850fd0e3269ffc68b",
"assets/assets/source/sound124.mp3": "80cb432ac61255f2b48466bf9eccb1aa",
"assets/assets/source/sound125.mp3": "5a68277c4e9adc58c100af37921c0813",
"assets/assets/source/sound126.mp3": "c1d2bbfcc97b303d78a77fac2432ad4a",
"assets/assets/source/sound127.mp3": "8679d80adc8d7e8d9a676f7fc4afc73a",
"assets/assets/source/sound128.mp3": "10505076c61a55feb0471e9703833e3d",
"assets/assets/source/sound129.mp3": "53a51be341d1287bc072f1f560474cda",
"assets/assets/source/sound13.mp3": "151d3838f2e07bec21b7a2c2ee15813b",
"assets/assets/source/sound130.mp3": "df8dc36e16d509dbaec7a295dc22ffea",
"assets/assets/source/sound131.mp3": "8c2b702f3e4495552084409eb9d947f1",
"assets/assets/source/sound132.mp3": "ea2402f2c63c3e4b7c3ad389cd3f5896",
"assets/assets/source/sound133.mp3": "ad82ef597b482540e998a6909a59b021",
"assets/assets/source/sound134.mp3": "36283f20b9dfffacb6778f8783ed7372",
"assets/assets/source/sound135.mp3": "4ccd39ea4f44136d1f1c9fbf3531250c",
"assets/assets/source/sound136.mp3": "c6dee46f0df2420eb142dc000b7c24e2",
"assets/assets/source/sound137.mp3": "d2ebd12b2974b626b1553ddba3e17287",
"assets/assets/source/sound138.mp3": "1efe0334337e8965cdd800cb24a3af86",
"assets/assets/source/sound139.mp3": "13a35dec26119d30f8ef684cfacbdbe9",
"assets/assets/source/sound14.mp3": "d871e106ce0dd8f7092d2f014778d7c2",
"assets/assets/source/sound140.mp3": "7728574044e4e7a4df26f00e09d8b2a2",
"assets/assets/source/sound141.mp3": "d1191c3aadd22cfd78ea00d2b2a5d966",
"assets/assets/source/sound142.mp3": "7ccfe9ef22621a27110a36260e8d9600",
"assets/assets/source/sound143.mp3": "901b9384ddafa3757ac56393b317090d",
"assets/assets/source/sound144.mp3": "6d895c83b96a3ec94953f5b4681cc84a",
"assets/assets/source/sound145.mp3": "9d895f67110978de80e39d99312b7d69",
"assets/assets/source/sound146.mp3": "73a700cae0672c9c28080eb713aa624c",
"assets/assets/source/sound147.mp3": "71ee72e16e7711c40000283ddb0e42db",
"assets/assets/source/sound148.mp3": "357bbb247a586f503389ca268b82e2b6",
"assets/assets/source/sound149.mp3": "3f65a31e49274c5ff8313ab2ffcd804d",
"assets/assets/source/sound15.mp3": "4748e86383246c2e33a5f1c7048cbb5e",
"assets/assets/source/sound150.mp3": "3ed67b0002dfa2dfcd8c6183bc33f5ac",
"assets/assets/source/sound151.mp3": "4bd8b0b361b39eff942ae628afc9250c",
"assets/assets/source/sound152.mp3": "9854e4f9cb73c84d863491054bf06c46",
"assets/assets/source/sound153.mp3": "71e34cafb95b9df6c46c6032056c85bf",
"assets/assets/source/sound154.mp3": "e8a2f312f250b2fbe36048c2e20bc020",
"assets/assets/source/sound155.mp3": "39a52a79b8099e79dbbdc3ac0efbf26c",
"assets/assets/source/sound156.mp3": "9d741150e3419ab278ff1849d76f0b2e",
"assets/assets/source/sound157.mp3": "b46e4b824a2a73aaff5e02f2c08581c5",
"assets/assets/source/sound158.mp3": "b39b8352ea2aa1b0ca3dc252a022320b",
"assets/assets/source/sound159.mp3": "6f72dc69f7c7ad103cb1106b505f5681",
"assets/assets/source/sound16.mp3": "e9ac6d342de6e5b7dcce3773bd941beb",
"assets/assets/source/sound160.mp3": "01208c76294b537d81c221b0f7d8b4ec",
"assets/assets/source/sound161.mp3": "8c11ee31cec9520f1a1e32f907766e0f",
"assets/assets/source/sound162.mp3": "36cd9e1584772e5d50ad6537b3b9a4fc",
"assets/assets/source/sound163.mp3": "ff333c5f5c5e85f26bfb1cd4c32d450c",
"assets/assets/source/sound17.mp3": "25bcb2c4326c41ece47c5b7ce9116488",
"assets/assets/source/sound18.mp3": "ba6f6bc8f0c9d50928cac61577334c2e",
"assets/assets/source/sound19.mp3": "6f2deb13c4e49c3d7875ffcc0ec857a7",
"assets/assets/source/sound2.mp3": "75d81d6da52dc1323e86578630af401f",
"assets/assets/source/sound20.mp3": "b4f2b26edb3b56493216e3f2955b26c7",
"assets/assets/source/sound21.mp3": "47b4edde5899572ab2adf11889a89cd3",
"assets/assets/source/sound22.mp3": "52e193983900d3b62a2344faf5e386c6",
"assets/assets/source/sound23.mp3": "7a2e70e41230bd5abea84331bb7b31da",
"assets/assets/source/sound24.mp3": "422d3776d933160260c23086b8e22ce1",
"assets/assets/source/sound25.mp3": "56dadf62a85d41f59932f6abdcef6dbe",
"assets/assets/source/sound26.mp3": "defb2fad701cfd50f741ea32e98deaba",
"assets/assets/source/sound27.mp3": "1d1c090e17599ad30faf7e25a273e43c",
"assets/assets/source/sound28.mp3": "5bfb5713cda7603f7671bbe5bb37a89f",
"assets/assets/source/sound29.mp3": "685c77474afb2b72c1ced0106eafc783",
"assets/assets/source/sound3.mp3": "7d41dd215252b3bafd8aaee5606e6da5",
"assets/assets/source/sound30.mp3": "a64262b35f5b305987a5460dfbea27fd",
"assets/assets/source/sound31.mp3": "396b7fcbb1bbda49887103542f46d09e",
"assets/assets/source/sound32.mp3": "d7f021c12ac39d982929c7475d2986db",
"assets/assets/source/sound33.mp3": "c9cc8cdbad20078e9eceec6a32da2309",
"assets/assets/source/sound34.mp3": "95ab57df28bb322cb60df740e1e72d4f",
"assets/assets/source/sound35.mp3": "a37132a134df149510ad21e35f9e2bbb",
"assets/assets/source/sound36.mp3": "f2335bdf501a9dbac858436b989f8059",
"assets/assets/source/sound37.mp3": "aac99e072d755b9e50dae676d60b1e9a",
"assets/assets/source/sound38.mp3": "782b1f1646a40b0e77109e011b947ac5",
"assets/assets/source/sound39.mp3": "5b518afbf65a15ecc56889ba6f238747",
"assets/assets/source/sound4.mp3": "c194fb7751e770670032d158af2a0a8d",
"assets/assets/source/sound40.mp3": "d16e8a0bad6a9b62932e2bcc19948b46",
"assets/assets/source/sound41.mp3": "f350c077efbf42a2f303cb71c4ca0f76",
"assets/assets/source/sound42.mp3": "b57b24979b4ac1866109389ba3c754e5",
"assets/assets/source/sound43.mp3": "acf22945b9ff5a1132bee552ce2a4656",
"assets/assets/source/sound44.mp3": "2b0536689b5c138072cbef14940d3463",
"assets/assets/source/sound45.mp3": "583ba4e20571fa7f0893b7274da06780",
"assets/assets/source/sound46.mp3": "3f2d664b378bcae9e36ed8c0535d091a",
"assets/assets/source/sound47.mp3": "6d79c263d11ee3103d9767a2a05f6276",
"assets/assets/source/sound48.mp3": "427253025a0895c96a093fd68a8080f9",
"assets/assets/source/sound49.mp3": "dea375fe0d68a47988833e4f4025e9fd",
"assets/assets/source/sound5.mp3": "048b4d86b8f36e5b3d536f21afbdc70a",
"assets/assets/source/sound50.mp3": "fc4488d63e95403228ad5431cc59f930",
"assets/assets/source/sound51.mp3": "eec246136da769acc4a6cc2d7d75fc41",
"assets/assets/source/sound52.mp3": "4c5e6efac6f8d933a17d0ecb599a2ea1",
"assets/assets/source/sound53.mp3": "0010c019ecf4635b23683bfd298db2fd",
"assets/assets/source/sound54.mp3": "b4d3ee0e8998da1ccf6fd855320492d4",
"assets/assets/source/sound55.mp3": "014bfb69ff31fca45eaefa8ef0359cf7",
"assets/assets/source/sound56.mp3": "f6f20b0bfaf93474f6ce73ea6264baf7",
"assets/assets/source/sound57.mp3": "3ef1c3e4fc875197d3126e374eab8b5d",
"assets/assets/source/sound58.mp3": "14c2ca8aeaee37998ec8a1e6068fe89c",
"assets/assets/source/sound59.mp3": "6c386241fcb52474cec424d6c8771709",
"assets/assets/source/sound6.mp3": "f6bf7042013398627af0b19936a2a2ce",
"assets/assets/source/sound60.mp3": "d189be6be664df9be0ef5db54e059873",
"assets/assets/source/sound61.mp3": "21373d838f9c76a8caa0d5e8725282c9",
"assets/assets/source/sound62.mp3": "fbaeb0272d3cbc88638200ebc8686a79",
"assets/assets/source/sound63.mp3": "daab06b0a305c2d6d1684b3aa9c985f2",
"assets/assets/source/sound64.mp3": "f19cce03a9e85ab320e9024e3baf1c45",
"assets/assets/source/sound65.mp3": "fc2df813e820a9a3c5d5cf5ec1101feb",
"assets/assets/source/sound66.mp3": "5f49b788af1d30bd9dc175a34a5088f7",
"assets/assets/source/sound67.mp3": "ff6ebd9740d2af2bc6b9a672ec1e1f69",
"assets/assets/source/sound68.mp3": "0bbc30a6bec582ecf87070aa8bf5a109",
"assets/assets/source/sound69.mp3": "abe093ad0fdfc0e2d2bd1878b3718192",
"assets/assets/source/sound7.mp3": "3f556f0696cf58fc5456e33bc1f5cf17",
"assets/assets/source/sound70.mp3": "90dfbf00b949ebfcda4f2181bddee936",
"assets/assets/source/sound71.mp3": "cc19a553c9ebbeac5f3b37f63551206b",
"assets/assets/source/sound72.mp3": "dc38f3138bacea17e622add885717f6d",
"assets/assets/source/sound73.mp3": "6891df5ce5db1457f2d56097d2873d1a",
"assets/assets/source/sound74.mp3": "2e05326ddf993ebe1ad946aee6199d3a",
"assets/assets/source/sound75.mp3": "f09b3b555bb7a9cbc6e5ab4f7036ca64",
"assets/assets/source/sound76.mp3": "d975203280de7e6c5a1068aef1e56624",
"assets/assets/source/sound77.mp3": "1569a3531f64323beb034e55a6467c83",
"assets/assets/source/sound78.mp3": "e63be4ac9007e3c3b0d1a5e969cad1b8",
"assets/assets/source/sound79.mp3": "f5aa5cc7ee7931e5300115462ed939ff",
"assets/assets/source/sound8.mp3": "585bb2ebc13331a15340184623b54998",
"assets/assets/source/sound80.mp3": "92f43f505db08d77d2ed3e7c4e35cf63",
"assets/assets/source/sound81.mp3": "f8c8d1d6ca97f058324f2038fc855be7",
"assets/assets/source/sound82.mp3": "c0f81e7bff141cce59b8893043b7a424",
"assets/assets/source/sound83.mp3": "56c6597f73ab785fe6e5a710a23209f0",
"assets/assets/source/sound84.mp3": "37bba6c1387480870779afac804a4ada",
"assets/assets/source/sound85.mp3": "69c11791aab45fea61c407e37b31c0f0",
"assets/assets/source/sound86.mp3": "f709f006706cdb9b58e5726e538c8cc3",
"assets/assets/source/sound87.mp3": "ad21f1ad3c65f816b35bbee600d60243",
"assets/assets/source/sound88.mp3": "e417c8e30290bca0d3c0acd3f160fdd9",
"assets/assets/source/sound89.mp3": "0c0edaa9a98b415f074f228a3589848d",
"assets/assets/source/sound9.mp3": "1dae14bfadd5db0d498e4357da1803f7",
"assets/assets/source/sound90.mp3": "cf19ea6360b30e507866d7940d13ef16",
"assets/assets/source/sound91.mp3": "1567da96b86e5a61fc5760ffc9e65de2",
"assets/assets/source/sound92.mp3": "ea2346baaa01f9ee3fceb8c4ed1a7d1b",
"assets/assets/source/sound93.mp3": "2f9afb862fd07ac00ce7fafcb1f7794c",
"assets/assets/source/sound94.mp3": "31e3f35e4347f83071b9c8ac7ff28698",
"assets/assets/source/sound95.mp3": "a5fd43e9d4b2cf9ff255b047998443af",
"assets/assets/source/sound96.mp3": "986c1aeea2f25999eb3d08ed9016f0cc",
"assets/assets/source/sound97.mp3": "2cdd44382d7042f4ffcc6edc2c93d621",
"assets/assets/source/sound98.mp3": "df4a03a8e85708db99db508a7f49ce3f",
"assets/assets/source/sound99.mp3": "2918da6174a60a837a9781e42cc21833",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "33c5b4833916b6ba3c60aaaf8670a7db",
"assets/NOTICES": "cefe8f44c5226de5203234d52d942dde",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "7c8e10de5af09911d810d7b79528729b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "28a4b3dbcf3323c3c3ef60bfd98f2251",
"/": "28a4b3dbcf3323c3c3ef60bfd98f2251",
"main.dart.js": "08be4f84089b9af55e1b9cf53e641ee5",
"manifest.json": "ad6930103204f90f97541bf13d120096",
"version.json": "234509b49bb228c0b240a10636562663"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
