-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 17, 2023 at 09:13 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `keka`
--

-- --------------------------------------------------------

--
-- Table structure for table `kekalogin`
--

CREATE TABLE `kekalogin` (
  `userid` int(255) NOT NULL,
  `usename` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kekalogin`
--

INSERT INTO `kekalogin` (`userid`, `usename`, `email`, `password`) VALUES
(1, 'Sumit Banerjee', 'sumit1971', '$2y$10$psVBKXcss5IpwJqXXGFhX.erRwjJqLVm39XblIe92eCHKrvIX5qei');

-- --------------------------------------------------------

--
-- Table structure for table `productlist`
--

CREATE TABLE `productlist` (
  `prod_id` int(255) NOT NULL,
  `productname` varchar(255) NOT NULL,
  `productprice` int(255) NOT NULL,
  `productdesc` varchar(255) NOT NULL,
  `productimage` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `productlist`
--

INSERT INTO `productlist` (`prod_id`, `productname`, `productprice`, `productdesc`, `productimage`) VALUES
(2, 'Keka Nike Socks', 300, '', 'https://i.pinimg.com/564x/48/a5/4c/48a54c7785f0b3a78d753bfce2a1f673.jpg'),
(3, 'Aesthetic socks', 500, '', 'https://i.pinimg.com/564x/f7/50/a9/f750a98317c1e5e0360089c48b7b865e.jpg'),
(4, 'White Socks', 500, '', 'https://i.pinimg.com/564x/ff/ef/5a/ffef5a7a79973e9a6e696b51ad61e0a1.jpg'),
(5, 'Socks ', 550, '', 'https://m.media-amazon.com/images/I/71+CpCNhFIL._SX679_.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kekalogin`
--
ALTER TABLE `kekalogin`
  ADD PRIMARY KEY (`userid`);

--
-- Indexes for table `productlist`
--
ALTER TABLE `productlist`
  ADD PRIMARY KEY (`prod_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kekalogin`
--
ALTER TABLE `kekalogin`
  MODIFY `userid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `productlist`
--
ALTER TABLE `productlist`
  MODIFY `prod_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
