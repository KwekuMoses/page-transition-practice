/* Styles */
import styles from "./page.module.css";

/* Components */
import ImageGrid from "./components/page-transitioning-image-grid/page-transitioning-image-grid";

/* Data */
import { imageGroups } from "@/components/page-transitioning-image-grid/api";

/* TypeScript Interfaces */
import { ImageGroup } from "@/components/page-transitioning-image-grid/interfaces";

export default function Home() {

    return (
        <main className={styles.main} >
            {
                imageGroups.map((imageGroup: ImageGroup, index: number) => {
                    const { images, groupId, groupLink } = imageGroup;
                    return (
                        <>
                            <ImageGrid key={groupId} groupId={groupId} groupLink={groupLink} images={images} />
                        </>
                    );
                })
            }
        </main>
    );
}
