# Customer Churn Analysis Report  
**Prepared by:** Colby Reichenbach  
**Date:** Jan. 27, 2025  

---

## **1. Executive Summary**  
Customer churn is a major concern for subscription-based businesses, leading to revenue loss and increased acquisition costs.  
This analysis examines **customer churn patterns**, develops **predictive models**, and proposes **actionable recommendations**  
to enhance customer retention.  

### **Key Findings:**  
✔ Customers on **month-to-month contracts** churn at significantly higher rates.  
✔ **Senior citizens** and those with **high monthly charges** are more likely to churn.  
✔ Customers using **Electronic Check** payment methods exhibit the highest churn rates.  
✔ The **predictive model achieves 84% accuracy**, making it suitable for **automated churn flagging**.  

### **Actionable Recommendations:**  
✔ Improve **onboarding & early customer engagement** to reduce early churn.  
✔ Offer **discounts or incentives for long-term contracts**.  
✔ Implement **proactive outreach for high-risk customers** flagged by the AI model.  

---

## **2. Introduction**  
Customer churn is the percentage of customers who discontinue using a service within a given period.  
High churn can lead to **revenue loss** and **customer acquisition cost increases**.  

This analysis aims to:  
- Understand **why customers churn**  
- Identify **key risk factors**  
- Develop **predictive models** to prevent churn  
- Recommend **data-driven strategies** for retention  

---

## **3. Exploratory Data Analysis (EDA) Findings**  

### **3.1 Churn Distribution**  
Understanding the **overall churn rate** helps establish the scale of the issue.  

![Churn Distribution](./Visuals/churn_distribution.png) 

- The dataset reveals a **churn rate of approximately 26.5%**.  
- A quarter of the customer base is leaving, highlighting a need for **targeted retention efforts**.  

---

### **3.2 Contract Type & Payment Method Impact on Churn**  
One of the strongest predictors of churn is **contract type**.  

![Contract & Payment vs Churn](./Visuals/contract_payment_method_vs_churn.png)  

✔ Customers on **month-to-month contracts churn the most**, indicating a lack of commitment to long-term service.  
✔ **One-year and two-year contract customers churn significantly less**, suggesting that **contract incentives** may help.  
✔ Customers paying via **Electronic Check** are more likely to churn, possibly due to dissatisfaction or manual payment inconvenience.  

---

### **3.3 Customer Demographics & Churn**  
Demographic factors, such as **age, gender, and dependents**, play a role in churn behavior.  

![Customer Demographics vs Churn](./Visuals/customer_demographics_vs_churn.png)  

✔ **Senior Citizens** exhibit **higher churn rates**, possibly due to technology barriers or cost concerns.  
✔ Customers without **dependents** or **partners** are more likely to churn, indicating a lower barrier to exit.  

---

### **3.4 Service Usage & Churn**  
Different service types impact customer retention.  

![Service Usage vs Churn](./Visuals/service_usage_vs_churn.png)  

✔ Customers with **Fiber Optic Internet churn at higher rates**, possibly due to service quality or pricing.  
✔ Customers **without Tech Support or Online Security services churn more**, suggesting that value-added services improve retention.  

---

### **3.5 Tenure & Monthly Charges Impact on Churn**  
Customer **tenure (time with the company) and billing amounts** significantly affect churn likelihood.  

![Tenure & Monthly Charges vs Churn](./Visuals/tenure_monthly_charges_vs_churn.png)  

✔ **Short-tenured customers (0-12 months) churn at the highest rates**, emphasizing the importance of **early engagement strategies**.  
✔ **Higher monthly charges correlate with higher churn**, indicating that pricing sensitivity plays a role in customer retention.  

---

## **4. Predictive Modeling & Evaluation**  

To predict customer churn, we trained **three machine learning models**:  

| Model                  | Accuracy |
|------------------------|----------|
| Logistic Regression    | **84%**  |
| Decision Tree         | 83%       |
| Random Forest         | 83%       |

### **4.1 Feature Importance Analysis**  
Which factors contribute most to churn?  

![Feature Importance](./Visuals/Feature_Importance.png)  

✔ **Total Charges, Monthly Charges, and Tenure** are the **most significant predictors** of churn.  
✔ **Contract type and payment method** also strongly impact churn rates.  

---

### **4.2 Model Performance Evaluation (ROC Curve)**  
How well do our models differentiate churners from non-churners?  

![ROC Curve](./Visuals/ROC_Curve.png)  

✔ **All models perform well, with the Logistic Regression model achieving 84% accuracy**.  
✔ The **ROC curve indicates strong model performance**, meaning we can use these models for real-world churn prediction.  

---

## **5. Recommendations & Business Actions**  

### **5.1 Strengthen Early Retention Strategies**  
✔ Offer **new customer onboarding incentives** to encourage long-term contracts.  
✔ Improve **customer engagement in the first three months** to reduce early churn.  

### **5.2 Encourage Long-Term Contracts**  
✔ Provide **discounts for one-year and two-year plans** to reduce churn.  
✔ Implement **early upgrade offers** for month-to-month users.  

### **5.3 Improve Service Offerings**  
✔ Customers **without Tech Support churn more**—offer **free trial periods** for support services.  
✔ Improve **Fiber Optic pricing and service quality** to reduce dissatisfaction.  

### **5.4 Implement AI-Based Churn Flagging**  
✔ Use predictive models to **flag high-risk customers** before they churn.  
✔ Deploy **automated retention campaigns** for flagged customers (discounts, loyalty incentives, personal outreach).  

---

## **6. Conclusion**  
This analysis provides a **data-driven approach to understanding and preventing customer churn**.  
By implementing the recommended strategies, businesses can **improve customer retention, reduce churn rates, and drive long-term revenue growth**.  

✔ **Next Steps:**  
- Implement **predictive churn monitoring dashboards**.  
- Conduct **A/B testing of retention strategies**.  
- Optimize **customer support and pricing models**.  

**Proactively managing churn will lead to higher customer satisfaction and increased profitability!**  

---

## 📧 **Contact Information**
📌 **Analyst:** Colby Reichenbach  
📩 **Email:** [colbyrreichenbach@gmail.com](mailto:colbyrreichenbach@gmail.com)   
🔗 **LinkedIn:** [colby-reichenbach](https://www.linkedin.com/in/colby-reichenbach/)
