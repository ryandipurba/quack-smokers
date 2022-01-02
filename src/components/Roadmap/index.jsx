import React from "react";
import "./index.css";

const Roadmap = () => {
  return (
    <section class="block-content t-block-teal l-block-spacing">
      <div class="l-contained">
        <header class="heading-group">
          <h1 className="display-1 text-center">Roadmap</h1>
        </header>
        <ul class="timeline-list">
          <li>
            <div class="content">
              <h3>Phase 1</h3>
              <p>
                444 Quack Smokers will be released in a Stealth Mint at great
                prices compared to the current market value of Solana NFT Space
              </p>
            </div>
          </li>
          <li>
            <div class="content">
              <h3>Phase 2</h3>

              <p>
                After selling out, we will get placed on the biggest Solana NFT
                Marketplaces and Exchanges
              </p>
            </div>
          </li>
          <li>
            <div class="content">
              <h3>Phase 3</h3>

              <p>
                Create merch so you can rep your set and turn heads when wearing
                the Quack Smokers out in Universe and the Metaverse
              </p>
            </div>
          </li>

          <li>
            <div class="content">
              <h3>Phase 4</h3>

              <p>
                Giveaways with other NFT projects and Influencers to build up
                value/audience.
              </p>
            </div>
          </li>
          <li>
            <div class="content">
              <h3>Phase 5</h3>

              <p>
                Progress the project so we create and build the best community
                on the Solana Network.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Roadmap;
