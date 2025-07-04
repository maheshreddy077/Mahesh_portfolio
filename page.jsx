import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 px-6 py-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-2">Mahesh Reddy</h1>
          <p className="text-xl">CSE Student | Java Developer | Tech Enthusiast</p>
        </header>

        {/* About Section */}
        <section className="mb-10">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">About Me</h2>
              <p>
                I’m currently in my third year of B.E. Computer Science, passionate about
                software development, especially in Java and web technologies. I’ve completed
                Java training from CodeWithHarry and build projects using IntelliJ IDEA.
              </p>
              <ul className="list-disc list-inside mt-4">
                <li>Based in India</li>
                <li>Java | HTML | CSS | React | Git</li>
                <li>Always exploring new tech</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section className="mb-10">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Skills</h2>
              <ul className="grid grid-cols-2 gap-2 list-disc list-inside">
                <li>Java</li>
                <li>HTML & CSS</li>
                <li>React (Basic)</li>
                <li>Bootstrap</li>
                <li>Git & GitHub</li>
                <li>IntelliJ IDEA</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <section className="mb-10">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Projects</h2>
              <ul className="list-disc list-inside">
                <li>
                  <strong>Java Quiz App</strong> – CLI-based quiz built with Java.
                </li>
                <li>
                  <strong>Portfolio Website</strong> – Personal website built using HTML/CSS.
                </li>
                <li>
                  <strong>Student Management System</strong> – Java console application for managing students.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Education Section */}
        <section className="mb-10">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Education</h2>
              <p>B.E. in Computer Science – 3rd Year</p>
              <p>Expected Graduation: 2026</p>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Contact</h2>
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2">
                  <Mail size={16} /> mrmaahi616@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={16} /> 6363075881
                </p>
                <p className="flex items-center gap-2">
                  <Linkedin size={16} />
                  <a
                    href="https://www.linkedin.com/in/mahesh-reddy-8091932b4"
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    linkedin.com/in/mahesh-reddy
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}