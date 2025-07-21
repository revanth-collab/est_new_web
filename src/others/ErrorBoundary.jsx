import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error }; // Store the error to display in the fallback
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error caught in ErrorBoundary:", error, errorInfo);
    }

    render() {
        const { hasError, error } = this.state;
        const { FallbackComponent } = this.props; // Get FallbackComponent from props

        if (hasError && FallbackComponent) {
            return <FallbackComponent error={error} />;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
