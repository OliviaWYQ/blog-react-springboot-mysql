-- MySQL dump 10.13  Distrib 8.0.16, for osx10.14 (x86_64)
--
-- Host: localhost    Database: blogdemo
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (43);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `time` date NOT NULL,
  `author` varchar(50) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (3,'三星高管爆料：Galaxy Fold折叠屏手机很有可能下月上市','2019-06-08','陈思学','根据最新的消息显示，这部折叠屏手机很有可能在下个月正式上市。近日有韩媒报道称，三星电子IM部门负责人Kim Dong-jin向媒体表示，三星Galaxy Fold还需要等一等才会上市，不过三星很快就会举行一次媒体会议，这似乎侧面证明了我们很快就能购买到这款折叠屏手机。前不久三星就表示正在逐步改善Galaxy Fold的部分问题。比如三星已经减少了铰链上下部分的间隙，防止外部灰尘进入。三星还将Galaxy Fold的屏幕保护膜塞入机身内，并在明显的位置上标注屏幕贴膜相关文字，防止用户将屏幕保护膜撕下。'),(4,'微软警告垃圾邮件用Office漏洞传木马：瞄准欧洲用户','2019-06-10','书聿','6月10日上午消息，微软安全研究人员上周五下午发出警告称，有一批携带恶意RTF文档的垃圾邮件正在网上传播，一旦用户打开其中的RTF文档，就会感染恶意软件。微软表示，这批垃圾邮件似乎瞄准了欧洲用户，因为邮件都使用欧洲各国的语言撰写。微软安全情报团队说：在这个新的策略中，RTF文件会下载并运行不同类型脚本（VBScript、PowerShell、PHP等），从而下载有效负载。最终的有效负载是一个后门木马。幸运的是，在微软发布安全警告时，该木马的命令和控制服务器似乎在周五宕机。但今后仍然可能出现类似的方式来传播后门木马。'),(23,'中国5G加速度：预计5年内创造就业岗位310万个','2019-06-14','新浪科技','6月6日上午，工信部向中国电信集团有限公司、中国移动通信集团有限公司、中国联合网络通信集团有限公司、中国广播电视网络有限公司颁发了基础电信业务经营许可证，批准四家企业经营“第五代数字蜂窝移动通信业务”。\n\n　　就在同一天，工信部还对《电信业务分类目录（2015年版）》进行了修订，在A类“基础电信业务”，“A12蜂窝移动通信业务”类别下，增设“A12-4 第五代数字蜂窝移动通信业务”业务子类。根据对其具体业务的表述，第五代数字蜂窝移动通信业务是指“利用第五代数字蜂窝移动通信网提供的话音、数据、多媒体通信等业务”。'),(24,'AT&T is the latest to cancel Galaxy Fold preorders 3','2019-06-13','    Jon Porter','AT&T has become the latest retailer to cancel preorders for the Galaxy Fold, the company has confirmed to The Verge. The news came to light after Tom’s Guide received an email regarding the publication’s preorder device. In the email AT&T said that “Samsung delayed the release of the phone, which means we can’t ship your phone.” In April, AT&T said it expected the device to ship today, on June 13th.\n\nBest Buy canceled its Galaxy Fold preorders last month, and Samsung also announced it would cancel any of its own preorders unless customers specifically told it otherwise.\n\nAT&T said that any money paid in advance would be refunded, and that affected customers would receive a $100 AT&T Promotion Card within the next 60 days. Customers can re-order the Galaxy Fold through AT&T once Samsung announces a new release date, but it’s unclear exactly when this will be. Samsung delayed the release of the Fold two months ago after multiple review units, including the device sent to The Verge, broke from just a few days of use.'),(30,'测试','2019-06-16','junit','Desc'),(31,'测试','2019-06-16','junit','Desc');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-16 23:57:48
