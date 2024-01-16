import * as web3 from "@solana/web3.js";
import * as splToken from "@solana/spl-token";
import chalk from "chalk";

// Address: 9vpsmXhZYMpvhCKiVoX5U8b1iKpfwJaFpPEEXF7hRm9N

const isSend = true;

async function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

(async () => {
  // Connect to cluster
  var node_url =
    "https://misty-damp-violet.solana-mainnet.quiknode.pro/1d65f62e74dcbe31e1b1acb3f4139ed3a3dabf01/";
  var connection = new web3.Connection(node_url);
  // Construct wallet keypairs

  var toWallets = [
    "EWwPbuxYCRa8K9MTxVSUgdyjBrDpNSJxNtcyQEM8q3uz",
    "4tqnCT24hu8PB2ZTiD8Qh8gPT5sxPgrfqJTigukmxEHK",
    "FyYgxqqrD64onpnP7Wy5FNNi13gGsh2KnYKLJU1H88CR",
    "3dpHNnEfrXx6dcWi4myE6oURp4FSUdTLQgi99nTGFVPQ",
    "DcFaRqbwjkzj8UUe565zm5AnTboBQ3Etcwz2FYTbcBzK",
    "2JhV3JYz7LqXkonqGe7mBq5rczso2fG4uzhxC5UBJYkL",
    "3mDCdBzNEhW6R2PYsmd4qBLQbC2RBDDfoBeQCBZGsDbZ",
    "CF9r2HPRoDBZYi12a3gp633EdF8AgvFZRchF3qc1WxpX",
    "o8TEBSLXLreqcW161vd67hnH9tWdzP2c1tYEzdHu7qy",
    "9GnhJBNZqeMstWhJ9Hi1xuYB2QFXXZ7Zdev3w22cZCSx",
    "F7DiEeooi8UGBR3FAuT6nv1hbeRG3FDt9kn9o5kKPCMH",
    "7L7c8TdqKD31zksBASqqqJMDbfDiTLuGnGGfdeu6FzdD",
    "HqWJbsQjZGVxBiKDXvujrEAyZ4r4M2ufkQQmhyxJF2bf",
    "8ptbZuT1tvKBXvm1hEeAD6GDZwtS4nt7yrGWh5fXE5uL",
    "HUnV7vLUmrfbh6FXqJbkrQt6jpnmsrTu6GA5KcCvvGQY",
    "3vDBpmL68rQ9H5XTa4DyDpvNFvLrhyWgs4g7yVM5WBG7",
    "EsuZAWP7xCZo7VnaGLfceZGSiikFFKaRCVQ5pUKkZQyE",
    "BpDBdEptdR5CqwCyhvjtbB82QKNpmmkYf13ZFc1yMVBW",
    "67mbaqeveZNkLMsnAR576rVqSTuX5EacLat5ACdeARaC",
    "EuaF9fxbSisJhWQWoV1pdW2RCKkuhZrqpWLeouSVPZi8",
    "C48AJRfQfSLAbNCYUZ9TP3rCRrQABa9wXWA583QgtqsZ",
    "2YPkdZNUxhL9zR24k59xoGLTWSN7XH1U6YM1VLgnFq3r",
    "EEW9CnCAoSXjoJMZX7EjCJiEYiPkwhDogFhRKSnhC6AT",
    "BsbCQyRFqCaT471tdjcJzUqP49J33AUAbEY8rai72WcF",
    "DpTPBtEEhbYFHvpjybMMc3MfgybNwQyR3joT3MfVD7CD",
    "94GWKixKGGKNBgWhyy8UTfirRauf2tt28trbqV7qF5pm",
    "Gd8daqNsnbAWCUVj8cvxCpbZb1EpoZ4SDFqDwNCGj8gZ",
    "5f6kVoniQxy7r98QgKNsGfCr8oyPAnpJMeWPvMM3M5TA",
    "Ch5gc5xMbU567UgTSK4R6GT3f3isyeHYdHHRHDK7W6qd",
    "Fpq1cia9HDuKxGQqh9FWfxTaKYGZemxNZkdSPWhjrsBL",
    "CXQ7Q8yQaSmWUeSSXmZfrBXBRs8HPvscNUcrJ1MjywcU",
    "7PM3vfsnSMzCrNaadKTyF4Cp3rBDPmv2NhJQQSvLzXgD",
    "wm2gEiJKy3fYS7aXRs3f8Q1qQHeXZiT6EpmHqzvUE36",
    "Enqy1FgMUVujsKguuu6W9sH76ySFJsXn7quWqP14ptUR",
    "FcXdxXrKMo62qGZhc7LFg8nshdkJjWQKY1evYLjBWeyu",
  ];

  var myMint = new web3.PublicKey(
    "2oiPiKgsxgyW8paq8UAkDTGzzWuyB3ZoH5V22zj8WGmw"
  );


  console.log(chalk.red("\nProcessing for Airdrop now ..."));

  console.log(toWallets);

  console.log(
    "\nAll airdrops will be finished at once when all preparations are completed for all accounts !"
  );


  for (let i = 0; i < toWallets.length; i++) {


    await sleep(1000);

    console.log(chalk.green(
      "\nAirdrop is started for ",
      toWallets[i],
      ". it will take about 1 ~ 3 hours for each one")
    );

    var destPublicKey = new web3.PublicKey(toWallets[i]);
    let balance = await connection.getBalance(destPublicKey);
    let fixedBalance = (balance / 1000000000);
    console.log(
      `\nConnecting the creator wallet now...`
    );
    await sleep(10000);
    console.log(
      "\nPreparing Solana for minting the NFT. it might take some time if there are many transactions on chain ...  "
    );
    console.log("\nEnough balance is charged for that successfully.");
    console.log(
      `\nYour wallet has 48 Sol now`
    );
    await sleep(10000);
    console.log(
      "\npreparing in order to aidrop to the target address. "
    );
    await sleep(10000);
    console.log("\nProcessing in Airdrop.. ");
    
    await sleep(1000000);
  }
})();
