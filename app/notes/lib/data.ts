export const notes = [
  {
    id: "training-ml",
    title: "from csv to a machine learning api (a write up)",
    icon: "⚖️",
    date: "06/13/2025",
    fullDate: "June 15, 2025 at 18:41 PM",
    preview:
      "how i built and deployed my first machine learning model for pricing of second hand clothing",
    pinned: true,
    content: `
      <p>Over the past weekend, I built and deployed my first machine learning model. 
      A price predictor for secondhand apparel. 
      It's now live, wrapped in an API, and ready to be used (once it's well tested ofc). 
      <strong>This will allow us improve price prediction speed from seconds to milliseconds.</strong></p>
      
      <p>This blog is a write-up of the process: what I built, why I built it, and the lessons learned from going from raw csv data to a production-grade machine learning product using Python, XGBoost, Gradio, Postman, Hugging Face and Vercel. </p>
      <p>And of course chatGPT that I've given access to my Terminal and Textedit.</p>
  
      <h2><strong>The Problem</strong></h2>
      <p>At Circular, we make software that help resellers run profitable, scalable businesses. Every product that they sell are unique. 
      One of the most time consuming processes in resale is product pricing.</p>
      <p>Our goal is to price each product so it sells within <strong>5-15 days</strong>. That is the sweet spot for both margin, inventory velocity and turnover.</p>
  
      <h2><strong>The Data</strong></h2>
      <p>We've built up a growing dataset from stores using our inventory management system. 
      I started with a dataset of only sold items but quickly realized it was biased, only showing successful outcomes. To fix this, I engineered a new dataset:</p>
      <ul>
        <li>thousands of rows of historical item data</li>
        <li>Includes both sold and unsold items</li>
        <li>Added Days on shelf to understand velocity</li>
        <li>Tracks returned and donated products</li>
        <li>Built a proxy target: price that results in sales within 5–15 days</li>
      </ul>
      <p>This gave the model real context. Not just what sold, but what didn't, and how fast.</p>
  
      <h2><strong>Model Training (Local)</strong></h2>
      <p>I wrote a training script called <code>train_and_export.py</code> with these actions:</p>
      <ol>
        <li>Loads the CSV file (202506-trainingData.csv)</li>
        <li>Uses ColumnTransformer with OneHotEncoder to encode: <i>(i am doing this to make the data actually usable by the model. the model only understands numbers, so we need to encode the categorical data into numbers)</i>
          <ul>
            <li>brand</li>
            <li>category</li>
            <li>material</li>
            <li>attractiveness</li>
          </ul>
        </li>
        <li>Trains a GradientBoostingRegressor (XGBoost)</li>
        <li>Saves the full pipeline with joblib</li>
      </ol>
      <p>This pipeline ensures the entire model (including preprocessing) is portable and consistent at inference time.</p>
  
      <h2><strong>Evaluation and Feature Impact</strong></h2>
      <p>Using a separate script <code>evaluate_model.py</code></p>
      <ul>
        <li>Calculated <strong>R²</strong>, <strong>MAE</strong>, <strong>RMSE</strong> (i had to ask chatGPT to explain these to me)</li>
        <li>Plotted predicted vs. actual prices</li>
        <li>Verified that <strong>brand</strong> and <strong>category</strong> are the strongest signals <i>(which aligns with our experience at Cirkulær)</i></li>
        <li>Learned that including too many sparsely populated features hurt performance</li>
        <li>Saw that unsold items and long shelf times gave useful negative examples</li>
      </ul>
      <p>This evaluation was key to trusting the model before going forward with it.</p>
       <img src="/ml-training-chatgpt3.png" alt="evaluation" />
      <p><i>getting tips on how to do evaluation and understanding the model</i></p>

  
      <h2><strong>Making It Interactive: Gradio + Hugging Face</strong></h2>
      <p>I used Gradio to wrap the trained model into a web UI that runs in a Hugging Face Space. It exposes six input fields:</p>
      <ul>
        <li>Brand</li>
        <li>Category</li>
        <li>Material</li>
        <li>Size</li>
        <li>Color</li>
        <li>Attractiveness (low, medium, high)</li>
      </ul>
      <p>After handling a few bugs (like OneHotEncoder errors on unknown categories), I added input sanitization to prevent NaNs or unsupported values from crashing the model.</p>
      <p>Once deployed on Hugging Face, I had a fully functional web interface.</p>
 
  
      <p>i went back and forth on this for a while. i identified some clear errors in the model so i had to re-train it. i tested with more features and with less features. and found a sweet spot that worked well.</p>
      <p>i spent a lot of time sparring with chatGPT to test out different things and have chatGPT modify the training script and the eval script.</p>
<img src="/ml-training-chatgpt2.png" alt="now what" />
      <p><i>giving chatGPT access to my terminal reduces the need for writing really good prompts. hence the "now what?"</i></p>

      <h2><strong>Production API with Vercel</strong></h2>
      <p>To make this usable in production, I built a FastAPI wrapper and deployed it to <strong>Vercel</strong>. This API:</p>
      <ul>
        <li>Accepts JSON input from any system</li>
        <li>Sends it to Hugging Face via <code>gradio_client</code></li>
        <li>Returns a clean JSON response like:</li>
      </ul>
  
      <pre><code>{
    "price": "861",
    "confidence": "620–1197 NOK"
}</code></pre>
  <p> </p>
  
  <p>I authenticated the request with a Hugging Face token via Vercel's env vars, configured the <code>/api/predict</code> endpoint, and used Postman to test. After some 404s and typos, it worked!</p>
   <img src="/ml-training-chatgpt1.png" alt="finally it worked!!" />
      <p><i>finally it worked!!</i></p>    
     
      <h2><strong>Tools & Stack</strong></h2>
      <ul>
        <li>Model Training: Python, pandas, scikit-learn, XGBoost, (and Textedit, terminal and chatGPT)</li>
        <li>Feature Encoding: ColumnTransformer, OneHotEncoder</li>
        <li>Model Persistence: joblib</li>
        <li>UI for testing on Hugging Face: Gradio</li>
        <li>Model Hosting: Hugging Face Spaces</li>
        <li>API: FastAPI</li>
        <li>Deployment: Vercel</li>
        <li>Testing: Postman</li>
      </ul>
  
      <h2><strong>some learnings</strong></h2>
      <ul>
        <li><strong>biases:</strong> include failure cases. Sold-only = biased model</li>
        <li><strong>overfitting:</strong> feature quality > quantity</li>
        <li><strong>debugging:</strong> APIs fail silently. Postman helped a lot</li>
        <li><strong>consistency:</strong>. training vs. inference matters Bundle your pipeline</li>
        <li>deployment: Hugging Face + Vercel = no own infrastructure</li>
      </ul>
  
      <h2><strong>some thoughts</strong></h2>
      <p>I wanted to see if I could (with help from AI) train my own machine learning model. 
      I started this as a weekend side quest. Mostly to learn, but with an actual example that we could use in Circular.</p>
      
      <p>Over the weekend, I've done: data engineering, model training, evaluation, built an interactive app (for testing), and made a production-ready API.</p>
      
      <p>One of my main motivations was to understand more of what's going on under the hood. That helps me make better product decisions, see what's possible, and understand trade-offs.</p>
  
      <p>i'm sure i've done some things wrong here, and i'm happy if anyone can point it out to me.</p>


      <p>thanks for reading. if you want to connect, you can find me at <a href="https://einar.blog/">einar.blog</a></p>
    `,
  },
] 