
# TrustFile - Blockchain-Based Verifiable Backup System for IoT

**TrustFile** is the native token for the **Blockshare** project, a blockchain-based, verifiable backup system designed for IoT-driven environments. This system leverages decentralized storage and cryptographic mechanisms to provide secure, auditable data backups and access control. TrustFile tokens incentivize node participation and facilitate secure interactions among stakeholders.

## Key Features
- **Decentralized Storage Incentive**: TrustFile tokens incentivize IPFS nodes to hold and maintain data integrity by storing encrypted pieces of IoT data.
- **Blockchain Integration**: Ensures transparency, immutability, and auditability for IoT data transactions.
- **Incentivized Stakeholder Participation**: Shareholders use TrustFile tokens to pay for critical operations such as Multi-Party Computation (MPC), Proxy Re-Encryption (PRE), and data requests.
- **Secure Data Sharing**: Through blockchain and decentralized systems, IoT data is protected and shared securely, even in environments with mutual distrust.

## Project Structure
- **IPFS Storage**: Data is split and stored across IPFS nodes, with TrustFile tokens used as an incentive for nodes that host data pieces.
- **Smart Contracts**: Governs MPC, VSS, and PRE to ensure secure and efficient management of IoT data access and encryption.
- **Token (TrustFile)**: The TrustFile token is central to all operations, facilitating payments between shareholders and nodes for processing and storage.

## How It Works
1. **Data Distribution**: IoT data is split using the Information Dispersal Algorithm (IDA) and stored across IPFS. IPFS nodes are incentivized to store these data pieces by earning TrustFile tokens.
2. **Key Generation and Management**: Using MPC, stakeholders collaboratively generate and distribute encryption keys, with TrustFile tokens paying for this process.
3. **Access Control**: TrustFile tokens are used to manage permissions and access to data. Stakeholders use tokens to request data access or Proxy Re-Encryption (PRE) services.
4. **Node Incentives**: IPFS nodes earn TrustFile tokens for storing and serving data pieces, ensuring decentralized and reliable storage for IoT data.

## Token Details
- **Token Name**: TrustFile
- **Token Standard**: ERC-20
- **Symbol**: TFL
- **Decimals**: 18
- **Network**: Ethereum

### Token Use Cases
- **Incentivizing IPFS Nodes**: TrustFile tokens are distributed to IPFS nodes that store and maintain IoT data pieces.
- **Payments for Computation**: Stakeholders use TrustFile tokens to pay for performing MPC, Proxy Re-Encryption (PRE), and data retrieval.
- **Data Requests**: Users pay with TrustFile tokens to access and retrieve specific IoT data through the system.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/TrustFile.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Compile smart contracts:
   ```bash
   npx hardhat compile
   ```

4. Deploy contracts to the blockchain:
   ```bash
   npx hardhat run scripts/deploy.js --network <network>
   ```

## Usage
- Use **TrustFile** tokens to incentivize IPFS nodes for storing IoT data.
- Stakeholders use **TrustFile** to pay for secure operations such as MPC and PRE, ensuring a decentralized and transparent data-sharing environment.

## Contribution
Contributions are welcome! Feel free to submit pull requests or open issues for improvements.

## License
This project is licensed under the [MIT License](LICENSE).
