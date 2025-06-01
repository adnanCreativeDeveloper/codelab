'use client'
import { motion } from 'framer-motion'
import React from 'react'
export default function CategoryCardAnimation({ children }) {
    return (
        <motion.div layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}>{children}</motion.div>
    )
}
