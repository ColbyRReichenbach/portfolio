# **Marketing Campaign Performance Analysis Report**
**Colby Reichenbach**

## **Table of Contents**

1. [Executive Summary](#executive-summary)
2. [Introduction](#introduction)
3. [Methodology](#methodology)
4. [Exploratory Data Analysis (EDA)](#exploratory-data-analysis-eda)
   - [Data Overview](#data-overview)
   - [Descriptive Statistics](#descriptive-statistics)
   - [Funnel Analysis](#funnel-analysis)
   - [Segment Analysis](#segment-analysis)
   - [Campaign Performance Analysis](#campaign-performance-analysis)
5. [A/B Testing Results](#ab-testing-results)
   - [Campaign Performance Efficiency (Cross-Campaign Analysis)](#Campaign-Performance-Efficiency-(Cross-Campaign-Analysis))
   - [Ad Creative Effectiveness (CTR-Focused Test)](#Ad-Creative-Effectiveness-(CTR-Focused-Test))
7. [Chi-Square Analysis](#chi-square-analysis)
8. [Strategic Recommendations](#strategic-recommendations)
9. [Future Testing Opportunities](#future-testing-opportunities)
10. [Conclusion](#conclusion)
11. [Appendix](#appendix)

---

## **Executive Summary**

This report provides a comprehensive analysis of the company's marketing campaign performance, focusing on key metrics such as Click-Through Rate (CTR), Conversion Rate, Cost Per Acquisition (CPA), and overall ad effectiveness. Key insights from A/B testing, Chi-Square analysis, and funnel analysis have been synthesized to deliver actionable recommendations aimed at optimizing marketing strategies and enhancing ROI.

---

### **Key Findings:**

- Campaign 916 outperforms others with a conversion rate of 14.16% and the lowest CPA of $9.36, indicating efficient budget utilization and strong audience targeting.

- Campaign 1178 has the highest CPA ($64.05) with a conversion rate of only 2.41%, highlighting ineffective targeting and ad creative issues.

- Chi-Square tests reveal no significant demographic impact on conversion rates, suggesting a need to pivot toward behavioral targeting to capture higher-quality leads.

- Funnel analysis highlights major drop-offs between impressions and clicks, underscoring engagement issues that can be addressed with optimized creatives and targeting strategies.

### **Strategic Recommendations:**

- Shift from demographic to behavioral targeting, leveraging user engagement data.

- Reallocate budget from underperforming campaigns to high-ROI campaigns like Campaign 916.

- Optimize ad creatives through targeted A/B testing to improve CTR and conversion rates.

- Enhance landing pages to bridge the click-to-conversion gap, improving overall efficiency.

---

## **Introduction**

The data used in this report comes from a marketing campaign dataset tracking impressions, clicks, conversions, and related cost metrics across multiple campaigns and demographic segments. The core objectives of this analysis are to:

- Assess campaign effectiveness based on key performance indicators (KPIs).
- Identify the impact of ad creatives on user engagement.
- Determine the significance of demographic factors in conversion rates.
- Provide data-driven recommendations for marketing optimization.

---

## **Methodology**

1. **Data Cleaning:** Removed anomalies (e.g., conversions without clicks) for accuracy.
2. **Feature Engineering:** Created key KPI's to access campaign effectiveness.
3. **Exploratory Data Analysis (EDA):** Identified trends, correlations, and outliers.
4. **A/B Testing:** Compared campaigns and ad performance based on CTR, CPA, and conversion rates.
5. **Chi-Square Tests:** Assessed demographic influences on conversion rates.

---

## **Exploratory Data Analysis (EDA)**

### **Data Overview**

- **Total Records:** 1,143 ad campaigns analyzed  
- **Key Variables:** Campaign IDs, Age, Gender, Interests, Impressions, Clicks, Spend, Conversions  

### **Descriptive Statistics**

| Metric                | Mean       | Min     | Max        | Std Dev    |
|-----------------------|------------|---------|------------|------------|
| Impressions           | 227020     | 512     | 3052003    | 331904     |
| Clicks                | 40.87      | 1       | 421        | 60.44      |
| Spent ($)             | 62.58      | 0       | 639.95     | 92.20      |
| Total Conversions     | 3.25       | 0       | 60         | 4.46       |
| Approved Conversions  | 1.95       | 0       | 21         | 2.17       |


## **Feature Engineering**
**Created the following KPIs:**
- **Click-Through Rate (CTR):** Measures how effectively an ad generates clicks. A higher CTR indicates that the ad is engaging and relevant to the target audience.
- **Cost Per Click (CPC):** Represents the average cost incurred for each click on an ad. This helps assess the efficiency of ad spending in driving traffic.
- **Cost Per Acquisition (CPA):** Indicates the average cost to acquire a new customer or lead. It’s a key measure of how cost-effective the campaign is in converting clicks into actual business outcomes.
- **Conversion Rate (CR):** Shows the percentage of users who complete a desired action (such as filling out a form or making a purchase) after clicking on an ad. It reflects the effectiveness of both the ad and the landing page in driving conversions.
- **Cost Per Thousand Impressions (CPM):** Calculates the cost to reach 1,000 potential customers. This metric is valuable for understanding the cost-efficiency of campaigns focused on brand awareness.

---
## **Exploratory Data Analysis (EDA)

EDA helps us understand the structure of the data, identify patterns, and detect anomalies. We analyze key metrics such as:
- **Impressions, Clicks, Spend, Conversions**
- **Descriptive Statistics** for campaign performance
- **Correlation Analysis** to find relationships between variables
- **Segment Analysis**
- **Funnel Analysis** to visualize the conversion process

This section lays the groundwork for hypothesis testing and strategic insights.

---

## **Descriptive Statistics**
### **Distribution of key Metrics**
(insert table)

### **Correlation Analysis**

![Correlation Heatmap](/figures/correlation_matrix_of_metrics.png)

- **Clicks & Spend (0.99):**  
  - Spending more directly correlates with generating more clicks. This indicates that *budget allocation* heavily influences click volume. - **Impressions and Conversions:** Weak correlation (r ≈ 0.3), suggesting impressions alone aren’t enough for conversions.
- **CTR & Impressions (-0.15):**  
  - As impressions increase, CTR slightly decreases. This could be due to *ad fatigue* or *diminishing returns* in broad audience targeting, where ads reach less engaged users over time.
- **CPA & Clicks/Impressions (~0.57 - 0.62):**  
  - CPA increases with more clicks and impressions, which may seem counterintuitive. This could indicate campaigns generating lots of engagement but struggling with *post-click conversions*, potentially due to *poor landing page experiences* or *irrelevant audiences*.  

### **Outliers**
- 124 Outliers were identified, they shared the common pattern of low impressions with disproportionately high CTR and CPA values. This can possibly skew metrics, and should be looked at further.

---

### **Funnel Analysis**
**Overview**
This section provides a comprehensive evaluation of the funnel performance, focusing on:
- **Impressions:** The total number of times ads were displayed.  
- **Clicks:** User engagement with ads, indicating interest.  
- **Total Conversions:** Actions taken after clicking (e.g., form submissions, inquiries).  
- **Approved Conversions:** Final qualified leads or successful customer acquisitions.

**Note**
The funnel plots use a logarithmic (log10) scale to represent the data. This transformation was applied because of the extreme differences in counts between stages (e.g., from millions of impressions to thousands of clicks).
**Why Use a Log Scale?**  
- **Improves Readability:** Without log scaling, the vast number of impressions would dwarf the clicks and conversions, making them nearly invisible.  
- **Reveals Trends Clearly:** Log scaling helps visualize drop-off patterns across all funnel stages more effectively.

--- 
###**Combined Funnel between all Campaigns**
![Overall Funnel](/figures/combined_marketing_funnel.png)

**Impressions → Clicks**
- **Drop-off Rate:** **99.98%** (Conversion Rate: ~0.018%)
- **Interpretation:**  
  Only ~1.8 out of every 10,000 users who view the ad click on it, signaling poor engagement.
- **Possible Issues:**  
  - Irrelevant ad targeting  
  - Unappealing creatives (weak visuals or CTAs)  
  - Ad fatigue (overexposure reducing impact)

### **Clicks → Total Conversions**

- **Drop-off Rate:** **92%** (Conversion Rate: ~8%)
- **Interpretation:**  
  Only 8 out of 100 clickers express interest or complete an inquiry—standard but improvable.
- **Possible Issues:**  
  - Poor landing page UX (slow load times, complex layouts)  
  - Mismatch between ad promises and landing page content  
  - Friction in forms (too many fields)

### **Total Conversions → Approved Conversions**

- **Drop-off Rate:** **67.14%** (Conversion Rate: ~32.86%)
- **Interpretation:**  
  Only 1 in 3 leads get approved—indicating potential lead quality issues or inefficiencies in the sales process.
- **Possible Issues:**  
  - Misleading ads attracting unqualified leads  
  - Poor follow-up process post-inquiry

### **Overall Funnel Efficiency**

- **Overall Conversion Rate:** **~0.00047%** (1 approved conversion per 213,000 impressions)
- **Insight:**  
  Highlights systemic inefficiencies across targeting, ad engagement, and post-click conversion processes.
- **Action Needed:**  
  - **Comprehensive audit** across all funnel stages  
  - Address drop-offs **systematically**, starting from ad targeting down to sales closure

---

###**Campaign Funnel Comparison**

![Comaprison Funnel](/figures/funnel_comparison.png)

**Campaign 916 (Top Performer)**

- **Conversion Rate:** **0.00357%** (*8x higher than Campaign 1178*)  
- **Post-Click Strength:** 34.5% of clicks convert into leads, 41% of leads are approved  
- **Key Takeaway:**  
  Cost-efficient with strong lead quality despite fewer impressions
- **Strategic Move:**  
  - **Scale budget** and A/B test creatives for broader reach without sacrificing quality

### **Campaign 936 (Moderate Performer)**

- **CTR:** **0.0254%** (*comparable to 916*)  
- **Drop-Off Issue:** Post-click conversions at 17.9%—significantly lower than 916’s 34.5%  
- **Approval Rate:** 33.1%  
- **Strategic Move:**  
  - **Focus on optimizing post-click stages** (landing pages, CTAs) to improve conversion efficiency

### **Campaign 1178 (Underperformer)**

- **Conversion Rate:** **0.00043%** (*lowest*)  
- **Key Bottleneck:** Low click-to-conversion rate (7.37%)  
- **High Volume, Low Value:** Massive impressions (~204 million) but minimal conversion  
- **Strategic Move:**  
  - **Conduct an in-depth audit** of ad creatives and landing pages  
  - **Narrow targeting** to high-converting audiences  
  - **Reduce budget** until optimizations are proven effective

---

### **Conversion Rate Analysis**
**Overview**
Convresion rate was analyzed per ad, and interest category to identify our most efficient areas.

### **Conversion Rate per Ad**
**Top 10 Performing Ads Insights**
- **Ad IDs:** 0, 46, 183, 179, 176, 164, 162, 160, 159, 137
- **Key Insight:**  
  These ads demonstrate **high efficiency** and **low acquisition costs**, but achieving consistent **100% conversion rates** across multiple ads is uncommon. This could reflect **niche targeting success** or **atypical data recording**. Further investigation into the campaign strategies behind these ads could uncover replicable best practices.

**Bottom 10 Performing Ads Insights**
- **Ad IDs:** 358, 371, 370, 369, 363, 362, 360, 359, 715, 786
- **Common Traits:**
  1. **High Ad Spend with No ROI:** Ads like **ID 715** spent **$63** without securing any approved conversions, suggesting budget inefficiencies.
  2. **High Impressions, Low Engagement:** Some ads achieved over **200,000 impressions** with minimal clicks and zero conversions, pointing to irrelevant targeting or poor ad messaging.
- **Key Insight:**  
  The failure of these ads despite high impressions and spend suggests **misaligned targeting**, **ineffective creatives**, or **landing page issues**. There’s a clear opportunity to optimize budget allocation and campaign design.
  
---

### **Conversion Rate by Interest**
(insert graph)
 - Intrests 31 (6.67%) and 36 (6.25%) show high conversion rates, potentially representing that these interests aligned closely with the product offering.
 - Intrests 103 (1.5%) and 105 (1.32%) show low conversion rates, these require re evaluation due to poor audience-product fit.

---

## **Segment Analysis**
**Overview**
Breaking down analysis by age, and gender allowing us to identify how demographics play a role.

### **Conversion Rate by Age group**
![Bar graph of conversion rate by gender](/figures/conversion_rate_by_age_group.png)

**What we see:**
**Top Performer:**  
- The 30-34 age group has the highest conversion rate at 4.65%, suggesting this demographic is highly engaged and more likely to convert.  

**Declining Trend:**
- There’s a noticeable drop-off in conversion rates as age increases:
35-39: 2.81%
40-44: 2.09%
45-49: 1.44%

**Cost Efficiency:**
- The Cost Per Acquisition (CPA) rises with age:  
30-34: $\$$34.58 (most cost-effective)  
45-49: $\$$104.27 (least cost-effective)

---

### **Conversion Rate by Gender**
![Bar graph of conversion rate by gender](/figures/conversion_rate_by_gender.png)


**Conversion Rate:**  
- Males (M): 3.75% conversion rate
- Females (F): 1.94% conversion rate

**Cost Per Acquisition (CPA):**  
- Males: $45.15 (more cost-effective)  

- Females: $74.19

**CTR Difference:**
- Females have a higher CTR (0.0208) compared to males (0.0145), but this doesn't translate into conversions.

---

### **Gender and Age Interaction**
![Gender and age interaction Heatmap](/figures/conversion_rate_heatmap.png)


**Highest Conversion Rate:**
- Males aged 30-34: 6.00% conversion rate
- Females aged 30-34: 3.49%

**Consistent Pattern:**
- Males outperform females in all age groups.
- Both genders experience a decline in conversion rates with age.

---

## **Campaign Performance Analysis**
**Overview**
Investigate differences in Campaign performance through key performance indicators.

![Campagin Performance by Key Metrics](/figures/campaign_performance_metrics.png)

**What we see:**
**Campaign 916 is the Top Performer:**
- Highest Conversion Rate: 14.16%
- Lowest CPA: $9.36
- Despite having the lowest number of impressions, it’s the most cost-effective, converting clicks into approved conversions efficiently.

**Campaign 936 - Moderate Performer:**
- Conversion Rate: 5.95%
- CPA: $24.52
- Performance is decent, but there's room for optimization to improve cost efficiency.

**Campaign 1178 - Underperforming:**
- Conversion Rate: 2.41% (Lowest)
- CPA: $64.05 (Highest)
- Despite having over 204 million impressions, conversions are not scaling effectively. This suggests poor audience targeting, ad fatigue, or ineffective creatives.

---


## **A/B Testing Results**

### **Campaign Performance Efficiency (Cross-Campaign Analysis)**

**Campaign Performance Efficiency (Cross-Campaign Analysis)**
**Objective:**  
Compare the cost efficiency and conversion performance of different campaigns using pairwise A/B tests.

**Metrics:**
- Conversion Rate (%) (Approved Conversions / Clicks)
- CPA Rate per Impression (CPA normalized by the number of impressions)

**Hypothesis:**
- **Null Hypothesis (H0):**: No difference in conversion efficiency across campaigns.
- **Alternative Hypothesis (H1):** : Campaign 916 performs significantly better in terms of CPA and conversions.

**Method:**
- T-Test (Independent Samples): Compare CPA between Campaign 916 and 1178 to assess statistical significance.

| **Comparison**          | **Conversion Rate (p-value)** | **CPA per Impression (p-value)** | **Insight**                         |
|-------------------------|-------------------------------|----------------------------------|------------------------------------|
| **916 vs 1178**         | **0.0030** (Significant)      | 0.1410 (Not Significant)         | 916 outperforms in conversions     |
| **916 vs 936**          | 0.4309 (Not Significant)      | 0.3669 (Not Significant)         | No significant difference          |
| **936 vs 1178**         | **2.34 × 10⁻¹²** (Significant) | 0.09837 (Marginal)              | 936 significantly outperforms 1178 |

### **What does this tell us?**
**Campaign 916 vs. Campaign 1178**

**Conversion Rate (CR):**
- Interpretation: There is a statistically significant difference in conversion rates between the two campaigns. Campaign 916 likely performs better.  
**CPA per Impression:**
- Interpretation: No significant difference in CPA per impression. The cost efficiency per impression is statistically similar between the two campaigns.

**Campaign 916 vs. Campaign 936**

**Conversion Rate (CR):**
- Interpretation: No significant difference in conversion rates between Campaign 916 and 936.
**CPA per Impression:**
- Interpretation: CPA per impression does not differ significantly between these campaigns.

**Campaign 936 vs. Campaign 1178**

**Conversion Rate (CR):**
- Interpretation: A highly significant difference in conversion rates. Campaign 936 significantly outperforms Campaign 1178 in conversion rates.
**CPA per Impression:**
- Interpretation: While not below the typical 0.05 threshold, this marginally non-significant result suggests there may be some difference worth further exploration.

### **What can we do?**
- Investigate into why Campaign 1178 is failing to convert, potentially shift focus from this campagin.
- Increase budget allocation to Campaign 916.
- Improve Campaign 936 through more A/B testing.

---

### **Ad Creative Effectiveness (CTR-Focused Test)**

**Objective:**
To determine which ad creatives (**ad_id**) drive **higher Click-Through Rates (CTR)** and whether these clicks lead to meaningful **conversions**.

**Metrics:**

- **Primary Metric:**  
  - **Click-Through Rate (CTR %):** Measures the effectiveness of ad creatives in generating clicks.  

- **Secondary Metric:**  
  - **Conversion Rate (%):** Ensures that clicks result in actual conversions, reflecting lead quality.

**Hypothesis:**

- **Null Hypothesis (H0):**  
  - There is **no significant difference** in CTR and Conversion Rates between different ad creatives.

- **Alternative Hypothesis (H1):**  
  - Certain ad creatives (with specific headlines, images, or messaging) significantly improve CTR and Conversion Rates.


**Methodology:**

1. **Segmentation:**
   - Ads were segmented into two groups based on **Cost Per Acquisition (CPA):**  
     - **High CPA Ads:** Ads with higher acquisition costs.  
     - **Low CPA Ads:** Ads with lower acquisition costs.

2. **Statistical Test:**
   - **Proportion Z-Test:** Used to compare **CTR** across High CPA and Low CPA ad groups.  
   - Additionally, **Conversion Rates** were analyzed to assess the **quality of clicks**.
  
| Metric              |   High CPA Ads |   Low CPA Ads |
|:--------------------|---------------:|--------------:|
| CTR (%)             |     1.82       |          2.01 |
| Conversion Rate (%) |     2.12       |          0    |
| Z-Statistic         |    -8.2104     |               |
| P-Value             |     2.2053e-16 |               |

### **What does this tell us?**
**1. Click-Through Rate (CTR) comparison:**
- Surprisingly, **Low CPA Ads have a higher CTR** than High CPA Ads.  
- This suggests that ads with **lower acquisition costs** are actually **more effective in attracting clicks**, contradicting the common assumption that higher spend correlates with better click performance.

**2. Conversion Rate Comparison:**
- **None of the clicks from Low CPA Ads led to conversions**, while High CPA Ads managed a modest **2.12% conversion rate**.  
- This indicates that although Low CPA Ads attract more clicks, **these clicks are low quality**, failing to convert into actual customers.

**Statistical Significance:**
- The **p-value is far below the 0.05 threshold**, indicating a **highly significant difference** in CTR between High and Low CPA Ads.  
- The **negative Z-statistic** suggests that **High CPA Ads have significantly lower CTRs** compared to Low CPA Ads.

### **What can we do?**
**1. Clicks ≠ Conversions:**  
   - **Low CPA Ads** generate **more clicks**, but they **fail to convert**.  
   - **High CPA Ads**, despite fewer clicks, result in **higher conversion rates**.  
   - This highlights the importance of focusing on **click quality** over quantity.

**2. Reevaluate Low CPA Ads:**  
   - Investigate the **ad content, targeting, and landing pages** of Low CPA Ads to understand **why conversions are zero**.  
   - Consider **adjusting targeting** to attract higher-quality leads.

**3. Optimize High CPA Ads:**  
   - Since High CPA Ads convert better, explore ways to **reduce their CPA** without compromising conversion rates.  
   - Test **minor adjustments** (e.g., ad copy, CTA placement) to improve CTR while maintaining conversion efficiency.

**4. Focus on Conversion-Driven Metrics:**  
   - Shift A/B testing focus from **just CTR** to a combination of **CTR + Conversion Rate + CPA** for a holistic performance view.

---

## **Chi-Square Analysis**

### ***Chi-Square Test***
**Objective:**  
Evaluate if demographic features (gender, age, interests) are associated with conversion performance

**Metrics:**
- Conversion rate across different groups

**Hypothesis:**
- H0: No association between demographic segments and conversion rates
- H1: Demographic factors significantly impact conversion performance

**Method:**
- Chi square test for independence to analyze:
    - Gender vs conversion rates.
    - Age Group vs conversion rates.
    - Interest category vs conversion rates.

| **Demographic Factor** | **Chi-Square Statistic** | **P-Value** | **Result**                     |
|----------------------------|--------------------------|-------------|--------------------------------|
| **Gender vs Conversion**   | 15.52                    | 0.3430      | Not Significant               |
| **Age vs Conversion**      | 29.86                    | 0.9198      | Not Significant               |
| **Interest vs Conversion** | 530.32                   | 0.6767      | Not Significant               |

**What does this tell us?**
**No Strong Demographic Associations:**
- Gender, age, and interests do not show a statistically significant impact on conversion rates.
- Variations observed in earlier analyses may be due to random fluctuations rather than true demographic effects.

**What can we do?**
**Focus on Campaign & Ad Optimization:**
- Since demographics aren't strong predictors, efforts should focus on ad creatives, campaign strategies, and targeting optimizations.

---

## **Strategic Recommendations**

1. **Reallocate Budget:**  
   - **Why Move from Campaign 1178?**  
     - **High CPA ($64.05)** with low conversion rates (2.4%) means we’re paying more without seeing proportional returns.  
   - **Focus on Campaign 916:**  
     - **CPA of $9.36** with a stable conversion rate of 14.1%—proving cost-efficient and impactful.

2. **Ad Hybrid Strategy:**  
   - **Blend High-Click Ads with High-Converting Ads:**  
     - Incorporate engaging elements from high-CTR ads into ads that convert well but lack clicks.

3. **Investigate Campaign 1178:**  
   - Despite poor conversions, its **impression volume is strong**.  
   - **Recommendation:** Review targeting, landing pages, and ad creative to leverage its reach while improving conversion paths.

4. **Behavioral Targeting Over Demographics:**  
   - Demographic factors had no significant impact on conversions.  
   - Shift focus to **user behaviors, interests, and retargeting** strategies.
  
5. **Landing Page Optimization:**
   - Improve Post-Click Experience through testing different landing page layouts, CTAs, and content to reduce the click-to-conversion gap.
   - Ensure fast load times and mobile-friendly designs to prevent drop-offs.

6 . **Advanced Analytical Approaches:**
   - Develop predictive models to forecast conversion likelihood based on ad characteristics and audience behaviors.

---

## **Future Testing:**

### 1. **A/B Tests for Creative Elements:**
- **Objective:** Identify which specific creative elements (headlines, images, CTAs) have the highest impact on CTR and conversion rates.
- **Outline:**
  - Test ads with identical content but varying one creative element at a time.
  - Measure changes in CTR and conversion rates.
- **Expected Insights:** Determine which creative elements resonate most with the target audience.

### 2. **Chi-Square Tests for Behavioral Segmentation:**
- **Objective:** Evaluate if user behaviors (click frequency, session duration) are significantly associated with conversion rates.
- **Outline:**
  - Segment users by behavioral patterns.
  - Apply chi-square tests to detect significant relationships.
- **Expected Insights:** Identify key behavioral drivers of conversions to refine targeting strategies.

### 3. **Time-Based Performance Analysis:**
- **Objective:** Assess if ad performance varies significantly across different times of day or days of the week.
- **Outline:**
  - Conduct A/B tests for ads shown at different time slots.
  - Compare engagement and conversion metrics.
- **Expected Insights:** Optimize ad scheduling to maximize engagement and conversions.

### 4. **Multi-Variant Testing:**
- **Objective:** Test multiple variables simultaneously to understand interaction effects between targeting, creatives, and placement.
- **Outline:**
  - Create multiple ad versions with varied targeting criteria and creatives.
  - Analyze performance differences using ANOVA.
- **Expected Insights:** Identify optimal combinations of targeting strategies and creative elements.

---

## **Conclusion**

The analysis reveals that **ad creatives and campaign strategies** drive performance more than demographics. **Campaign 916** emerges as a top performer, while **Campaign 1178** needs targeted optimizations. Moving forward, a hybrid approach combining effective elements from different campaigns will maximize ROI.

---

## 📚 **Further Reading**

To follow along my workflow, including all code refer to the final notebook.:  
**[Full Notebook - including code](/notebooks/Final_Notebook.ipynb)**  
For a summarized version of the full report, refer to the summary report:  
**[Summary Report - Marketing Campaign Analysis](/Summary_Report.md)**  

---

**Prepared By:** Colby Reichenbach  
**Date:** 01-01-2025

