This project introduces an interactive web application that simulates and visualizes how a Reinforcement Learning agent, specifically a Thompson Sampling Bandit, consistently outperforms traditional A/B testing in real-time to maximize advertising ROI. The system allows users to run multiple simulation runs, aggregating results to demonstrate the statistical robustness and financial benefits of adaptive ad spend allocation. The motivation stems from the inherent inefficiency of fixed exploration periods in A/B tests, aiming to minimize wasted ad spend and discover optimal ad creatives more efficiently.

### Key Highlights:

* **Real-Time ROI Maximization:** Employs a Thompson Sampling Bandit to dynamically shift ad impressions towards higher-performing creatives, focusing directly on maximizing clicks and potential ROI over static A/B allocation.
* **Interactive Simulation Dashboard:** Built with Streamlit, enabling users to configure simulation parameters (e.g., number of runs, impressions) and visually compare the bandit's performance against a traditional A/B test.
* **Statistical Robustness & Comparative Analysis:** Aggregates performance metrics (Total Clicks, CTR, Lift) over multiple simulation runs, displaying averages and standard deviation bands to reliably demonstrate the bandit strategy's consistent outperformance.
* **Efficient Ad Creative Discovery:** Demonstrates how the bandit algorithm intelligently balances exploration of new ad options with exploitation of known winners, leading to faster convergence on the best-performing ad with less wasted spend.

### Core Technologies & Concepts:

* Python, Streamlit, Pandas, NumPy, SciPy (`scipy.stats.beta`)
* Reinforcement Learning (Multi-Armed Bandits, Thompson Sampling)
* Bayesian Statistics (Beta Distributions)
* A/B Testing Methodology & Simulation
* Monte Carlo Simulation
* Marketing Analytics & ROI Optimization
