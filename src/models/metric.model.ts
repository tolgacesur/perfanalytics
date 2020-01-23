import mongoose from "mongoose";

const MetricSchema = new mongoose.Schema({
    token: String,
    url: String,
    data : {
        ttfb: Number,
        fcp: Number,
        domComplete: Number,
        windowLoadEvent: Number,
        resources: [{
            url: String,
            type : String,
            duration: String,
            transferSize : String
        }]
    }
}, { timestamps: { createdAt: 'createdAt'}, versionKey: false});

export default mongoose.model("Metric", MetricSchema);