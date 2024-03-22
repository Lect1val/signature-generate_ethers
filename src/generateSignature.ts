import { ethers } from 'ethers';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Function to sign a message with a private key
async function signMessageWithPrivateKey(message: string, privateKey: string): Promise<void> {
    // Create a wallet from the provided private key
    const wallet = new ethers.Wallet(privateKey);

    // Sign the provided message
    const signedMessage = await wallet.signMessage(message);

    // Log the results
    console.log("Wallet Address:", wallet.address);
    console.log("Signed Message:", signedMessage);
    console.log("Original Message:", message);
}

// Get the private key from environment variables
const privateKey = process.env.PRIVATE_KEY || '';

// Validate private key exists
if (!privateKey) {
    console.error('Private key not found in environment variables.');
    process.exit(1);
}

const web3Url = process.env.WEB3_URL || '';
const nonce = '';
const employeeId = '';
const firstName = '';
const lastName = '';
const email = '';


const message = `Please sign to confirm this information.\n\nWebsite: ${web3Url}\nNonce: ${nonce}\nEmployee ID: ${employeeId}\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}`;

// Sign the message
signMessageWithPrivateKey(message, privateKey).catch(console.error);
