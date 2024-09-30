
# TrustFile - Blockchain-Based Verifiable Backup System for IoT

**TrustFile** is a token designed for the **Blockshare** project, which provides a decentralized, blockchain-based verifiable backup system tailored for IoT-driven environments. This project leverages blockchain technology, cryptographic techniques, and decentralized storage to ensure secure and auditable data management for IoT devices, especially in scenarios where stakeholders cannot fully trust each other or centralized systems.

## Key Features
- **Blockchain Integration**: Ensures transparency, immutability, and auditability.
- **Decentralized Storage**: Uses IPFS to store encrypted IoT data efficiently.
- **Multi-Party Computation (MPC)**: Collaborative encryption key generation.
- **Verifiable Secret Sharing (VSS)**: Secure and trustable key distribution among stakeholders.
- **Proxy Re-Encryption (PRE)**: Enables authorized access without compromising data security.
- **Token Integration (TrustFile)**: Supports the project's operations by facilitating secure access to stored IoT data and interactions between stakeholders.

## Project Structure
- **Smart Contracts**: Implements MPC, VSS, and PRE to manage secure access to IoT data.
- **IPFS Storage**: Decentralized file storage for IoT data using Content Identifiers (CIDs).
- **Token (TrustFile)**: An Ethereum-based token that facilitates interactions within the Blockshare framework.

## How It Works
1. **Data Distribution**: IoT data is split into pieces and stored in the IPFS network. Only the encrypted Content Identifiers (CIDs) are stored on the blockchain.
2. **Key Generation**: Using Multi-Party Computation (MPC), stakeholders collaboratively generate encryption keys without relying on a central entity.
3. **Access Control**: TrustFile tokens manage access rights to the data. Only authorized token holders can initiate the process of retrieving or re-encrypting the IoT data.
4. **Data Access**: Proxy Re-Encryption (PRE) ensures that authorized users can access encrypted IoT data securely, without exposing the underlying encryption keys.

## Token Details
- **Token Name**: TrustFile
- **Token Standard**: ERC-20
- **Symbol**: TFL
- **Decimals**: 18
- **Network**: Ethereum

## Installation

1. Clone this repository:
   \`\`\`bash
   git clone https://github.com/Electrasi/TrustFile.git
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Compile smart contracts:
   \`\`\`bash
   npx hardhat compile
   \`\`\`

4. Deploy contracts to the blockchain:
   \`\`\`bash
   npx hardhat run scripts/deploy.js --network <network>
   \`\`\`

## Usage
- To interact with the smart contracts and initiate IoT data sharing, use the TrustFile token to verify access and control data permissions.
- Use the provided scripts to interact with the blockchain for key generation, data storage, and access control.

## Contribution
Contributions are welcome! Feel free to submit pull requests or open issues for improvements.

## License
This project is licensed under the [MIT License](LICENSE).
