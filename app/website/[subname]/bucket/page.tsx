import { FunctionComponent } from "react";

interface BucketProps {
    
}
 
const Bucket: FunctionComponent<BucketProps> = () => {
    return <ul>
        <li>First Item</li>
        <li>second Item</li>
        <li>third Item</li>
        <li>fourth Item</li>
    </ul>
}
 
export default Bucket;