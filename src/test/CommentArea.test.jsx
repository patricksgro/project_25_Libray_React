import { render } from "@testing-library/react";
import CommentArea from '../Components/CommentArea.jsx';
import { AsinProvider } from "../ContextAsin/ContextAsin.jsx";

describe("CommentArea component", () => {
    test("renderizza CommentArea senza errori", () => {
        const { container } = render(
            <AsinProvider>
                <CommentArea />
            </AsinProvider>
        );

        expect(container).toBeDefined();
    });
});